package iam.caoba.domain.scrumboard;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScrumboardService {

    private final ScrumboardRepository repo;

    // ==================== Board ====================

    public Board createBoard(Board board) {
        if (board.getName() == null || board.getName().isBlank()) {
            throw new RuntimeException("鐪嬫澘鍚嶇О涓嶈兘涓虹┖");
        }
        Long id = repo.insertBoard(board);
        Board created = repo.findBoardById(id);
        // Create default columns: To Do, In Progress, Done
        repo.insertColumn(BoardColumn.builder().boardId(id).name("To Do").position(0).build());
        repo.insertColumn(BoardColumn.builder().boardId(id).name("In Progress").position(1).build());
        repo.insertColumn(BoardColumn.builder().boardId(id).name("Done").position(2).build());
        return created;
    }

    public Board findBoardById(Long id) {
        Board board = repo.findBoardById(id);
        if (board == null) throw new ResourceNotFoundException("看板不存在：" + id);
        return board;
    }

    public List<Board> findBoardsByUserId(Long userId) {
        return repo.findBoardsByUserId(userId);
    }

    public Board updateBoard(Long id, Board updated) {
        Board existing = findBoardById(id);
        if (updated.getName() != null) existing.setName(updated.getName());
        if (updated.getType() != null) existing.setType(updated.getType());
        repo.updateBoard(existing);
        return repo.findBoardById(id);
    }

    @Transactional
    public void deleteBoard(Long id) {
        findBoardById(id);
        repo.deleteBoard(id);
    }

    // ==================== Column ====================

    public BoardColumn findColumnById(Long id) {
        BoardColumn col = repo.findColumnById(id);
        if (col == null) throw new ResourceNotFoundException("鍒椾笉瀛樺湪: " + id);
        return col;
    }

    public List<BoardColumn> findColumnsByBoardId(Long boardId) {
        findBoardById(boardId);
        return repo.findColumnsByBoardId(boardId);
    }

    public BoardColumn createColumn(Long boardId, BoardColumn column) {
        findBoardById(boardId);
        column.setBoardId(boardId);
        if (column.getPosition() == null) {
            List<BoardColumn> existing = repo.findColumnsByBoardId(boardId);
            column.setPosition(existing.size());
        }
        Long id = repo.insertColumn(column);
        return repo.findColumnById(id);
    }

    public BoardColumn updateColumn(Long id, BoardColumn updated) {
        BoardColumn existing = findColumnById(id);
        if (updated.getName() != null) existing.setName(updated.getName());
        if (updated.getPosition() != null) existing.setPosition(updated.getPosition());
        repo.updateColumn(existing);
        return repo.findColumnById(id);
    }

    @Transactional
    public void deleteColumn(Long id) {
        findColumnById(id);
        repo.deleteColumn(id);
    }

    public void reorderColumns(Long boardId, List<Long> columnIds) {
        findBoardById(boardId);
        repo.reorderColumns(boardId, columnIds);
    }

    // ==================== Card ====================

    public BoardCard findCardById(Long id) {
        BoardCard card = repo.findCardById(id);
        if (card == null) throw new ResourceNotFoundException("卡片不存在：" + id);
        return card;
    }

    public List<BoardCard> findCardsByColumnId(Long columnId) {
        return repo.findCardsByColumnId(columnId);
    }

    public List<BoardCard> findCardsByBoardId(Long boardId) {
        return repo.findCardsByBoardId(boardId);
    }

    public BoardCard createCard(Long boardId, Long columnId, BoardCard card) {
        findBoardById(boardId);
        findColumnById(columnId);
        card.setBoardId(boardId);
        card.setColumnId(columnId);
        if (card.getPosition() == null) {
            card.setPosition(repo.getMaxPositionInColumn(columnId) + 1);
        }
        Long id = repo.insertCard(card);
        return repo.findCardById(id);
    }

    public BoardCard updateCard(Long id, BoardCard updated) {
        BoardCard existing = findCardById(id);
        if (updated.getTitle() != null) existing.setTitle(updated.getTitle());
        if (updated.getDescription() != null) existing.setDescription(updated.getDescription());
        if (updated.getPriority() != null) existing.setPriority(updated.getPriority());
        if (updated.getAssignedTo() != null) existing.setAssignedTo(updated.getAssignedTo());
        if (updated.getDueDate() != null) existing.setDueDate(updated.getDueDate());
        repo.updateCard(existing);
        return repo.findCardById(id);
    }

    @Transactional
    public void deleteCard(Long id) {
        findCardById(id);
        repo.deleteCard(id);
    }

    @Transactional
    public BoardCard moveCard(Long cardId, Long targetColumnId, Integer targetPosition) {
        BoardCard card = findCardById(cardId);
        findColumnById(targetColumnId);
        if (targetColumnId.equals(card.getColumnId()) && targetPosition != null && targetPosition.equals(card.getPosition())) {
            return card; // no-op
        }
        if (targetPosition == null) {
            targetPosition = repo.getMaxPositionInColumn(targetColumnId) + 1;
        }
        repo.moveCard(cardId, targetColumnId, targetPosition);
        return repo.findCardById(cardId);
    }

    @Transactional
    public void reorderCards(Long columnId, List<Long> cardIds) {
        repo.reorderCards(columnId, cardIds);
    }
}
