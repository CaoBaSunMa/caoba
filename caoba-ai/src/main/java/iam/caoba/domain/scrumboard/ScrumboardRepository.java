package iam.caoba.domain.scrumboard;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class ScrumboardRepository {

    private final JdbcTemplate jdbc;

    public ScrumboardRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    // ==================== RowMappers ====================

    private final RowMapper<Board> boardRowMapper = (rs, i) -> Board.builder()
            .id(rs.getLong("id"))
            .name(rs.getString("name"))
            .type(rs.getString("type"))
            .userId(rs.getLong("user_id"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    private final RowMapper<BoardColumn> columnRowMapper = (rs, i) -> BoardColumn.builder()
            .id(rs.getLong("id"))
            .boardId(rs.getLong("board_id"))
            .name(rs.getString("name"))
            .position(rs.getInt("position"))
            .build();

    private final RowMapper<BoardCard> cardRowMapper = (rs, i) -> BoardCard.builder()
            .id(rs.getLong("id"))
            .columnId(rs.getLong("column_id"))
            .boardId(rs.getLong("board_id"))
            .title(rs.getString("title"))
            .description(rs.getString("description"))
            .priority(rs.getString("priority"))
            .assignedTo(rs.getObject("assigned_to") != null ? rs.getLong("assigned_to") : null)
            .dueDate(rs.getDate("due_date") != null ? rs.getDate("due_date").toLocalDate() : null)
            .position(rs.getInt("position"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .build();

    // ==================== Board CRUD ====================

    public Board findBoardById(Long id) {
        List<Board> list = jdbc.query("SELECT * FROM boards WHERE id = ?", boardRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public List<Board> findBoardsByUserId(Long userId) {
        return jdbc.query("SELECT * FROM boards WHERE user_id = ? ORDER BY created_at DESC", boardRowMapper, userId);
    }

    public Long insertBoard(Board board) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO boards (name, type, user_id, created_at) VALUES (?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, board.getName());
            ps.setString(2, board.getType() != null ? board.getType() : "KANBAN");
            ps.setLong(3, board.getUserId());
            ps.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateBoard(Board board) {
        jdbc.update("UPDATE boards SET name=?, type=? WHERE id=?",
                board.getName(), board.getType(), board.getId());
    }

    public void deleteBoard(Long id) {
        jdbc.update("DELETE FROM board_cards WHERE board_id=?", id);
        jdbc.update("DELETE FROM board_columns WHERE board_id=?", id);
        jdbc.update("DELETE FROM boards WHERE id=?", id);
    }

    // ==================== Column CRUD ====================

    public BoardColumn findColumnById(Long id) {
        List<BoardColumn> list = jdbc.query("SELECT * FROM board_columns WHERE id = ?", columnRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public List<BoardColumn> findColumnsByBoardId(Long boardId) {
        return jdbc.query("SELECT * FROM board_columns WHERE board_id = ? ORDER BY position ASC", columnRowMapper, boardId);
    }

    public Long insertColumn(BoardColumn column) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO board_columns (board_id, name, position) VALUES (?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, column.getBoardId());
            ps.setString(2, column.getName());
            ps.setInt(3, column.getPosition() != null ? column.getPosition() : 0);
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateColumn(BoardColumn column) {
        jdbc.update("UPDATE board_columns SET name=?, position=? WHERE id=?",
                column.getName(), column.getPosition(), column.getId());
    }

    public void deleteColumn(Long id) {
        jdbc.update("DELETE FROM board_cards WHERE column_id=?", id);
        jdbc.update("DELETE FROM board_columns WHERE id=?", id);
    }

    public void reorderColumns(Long boardId, List<Long> columnIds) {
        for (int i = 0; i < columnIds.size(); i++) {
            jdbc.update("UPDATE board_columns SET position=? WHERE id=? AND board_id=?",
                    i, columnIds.get(i), boardId);
        }
    }

    // ==================== Card CRUD ====================

    public BoardCard findCardById(Long id) {
        List<BoardCard> list = jdbc.query("SELECT * FROM board_cards WHERE id = ?", cardRowMapper, id);
        return list.isEmpty() ? null : list.get(0);
    }

    public List<BoardCard> findCardsByColumnId(Long columnId) {
        return jdbc.query("SELECT * FROM board_cards WHERE column_id = ? ORDER BY position ASC", cardRowMapper, columnId);
    }

    public List<BoardCard> findCardsByBoardId(Long boardId) {
        return jdbc.query("SELECT * FROM board_cards WHERE board_id = ? ORDER BY position ASC", cardRowMapper, boardId);
    }

    public Long insertCard(BoardCard card) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO board_cards (column_id, board_id, title, description, priority, assigned_to, due_date, position, created_at) "
                            + "VALUES (?,?,?,?,?,?,?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, card.getColumnId());
            ps.setLong(2, card.getBoardId());
            ps.setString(3, card.getTitle());
            ps.setString(4, card.getDescription());
            ps.setString(5, card.getPriority());
            ps.setObject(6, card.getAssignedTo());
            ps.setDate(7, card.getDueDate() != null ? java.sql.Date.valueOf(card.getDueDate()) : null);
            ps.setInt(8, card.getPosition() != null ? card.getPosition() : 0);
            ps.setTimestamp(9, Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public void updateCard(BoardCard card) {
        jdbc.update("UPDATE board_cards SET title=?, description=?, priority=?, assigned_to=?, due_date=? WHERE id=?",
                card.getTitle(), card.getDescription(), card.getPriority(),
                card.getAssignedTo(),
                card.getDueDate() != null ? java.sql.Date.valueOf(card.getDueDate()) : null,
                card.getId());
    }

    public void deleteCard(Long id) {
        jdbc.update("DELETE FROM board_cards WHERE id=?", id);
    }

    public void moveCard(Long cardId, Long targetColumnId, Integer targetPosition) {
        BoardCard card = findCardById(cardId);
        if (card == null) return;

        Long sourceColumnId = card.getColumnId();

        // Shift cards in target column to make room
        jdbc.update("UPDATE board_cards SET position = position + 1 WHERE column_id = ? AND position >= ?",
                targetColumnId, targetPosition);

        // Remove card from source column ordering
        jdbc.update("UPDATE board_cards SET position = position - 1 WHERE column_id = ? AND position > ?",
                sourceColumnId, card.getPosition());

        // Move card
        jdbc.update("UPDATE board_cards SET column_id=?, position=? WHERE id=?",
                targetColumnId, targetPosition, cardId);
    }

    public void reorderCards(Long columnId, List<Long> cardIds) {
        for (int i = 0; i < cardIds.size(); i++) {
            jdbc.update("UPDATE board_cards SET position=?, column_id=? WHERE id=?",
                    i, columnId, cardIds.get(i));
        }
    }

    public int getMaxPositionInColumn(Long columnId) {
        Integer max = jdbc.queryForObject(
                "SELECT COALESCE(MAX(position), -1) FROM board_cards WHERE column_id=?", Integer.class, columnId);
        return max != null ? max : -1;
    }
}
