package iam.caoba.domain.scrumboard;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ScrumboardController {

    private final ScrumboardService scrumboardService;

    // ==================== Board ====================

    /**
     * 鏌ヨ褰撳墠鐢ㄦ埛鐨勬墍鏈夌湅鏉?     * GET /api/boards
     */
    @GetMapping("/boards")
    public ApiResponse<List<Board>> listBoards(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(scrumboardService.findBoardsByUserId(userId));
    }

    /**
     * 鏌ヨ鍗曚釜鐪嬫澘
     * GET /api/boards/{id}
     */
    @GetMapping("/boards/{id}")
    public ApiResponse<Board> getBoard(@PathVariable Long id) {
        return ApiResponse.ok(scrumboardService.findBoardById(id));
    }

    /**
     * 鍒涘缓鐪嬫澘
     * POST /api/boards
     */
    @PostMapping("/boards")
    public ApiResponse<Board> createBoard(@RequestAttribute("userId") Long userId, @RequestBody Board board) {
        board.setUserId(userId);
        return ApiResponse.ok("鐪嬫澘鍒涘缓鎴愬姛", scrumboardService.createBoard(board));
    }

    /**
     * 鏇存柊鐪嬫澘
     * PUT /api/boards/{id}
     */
    @PutMapping("/boards/{id}")
    public ApiResponse<Board> updateBoard(@PathVariable Long id, @RequestBody Board board) {
        return ApiResponse.ok("鐪嬫澘鏇存柊鎴愬姛", scrumboardService.updateBoard(id, board));
    }

    /**
     * 鍒犻櫎鐪嬫澘
     * DELETE /api/boards/{id}
     */
    @DeleteMapping("/boards/{id}")
    public ApiResponse<Void> deleteBoard(@PathVariable Long id) {
        scrumboardService.deleteBoard(id);
        return ApiResponse.ok("鐪嬫澘鍒犻櫎鎴愬姛", null);
    }

    // ==================== Column ====================

    /**
     * 鑾峰彇鐪嬫澘鐨勬墍鏈夊垪
     * GET /api/boards/{id}/columns
     */
    @GetMapping("/boards/{boardId}/columns")
    public ApiResponse<List<BoardColumn>> listColumns(@PathVariable Long boardId) {
        return ApiResponse.ok(scrumboardService.findColumnsByBoardId(boardId));
    }

    /**
     * 鍒涘缓鍒?     * POST /api/boards/{id}/columns
     */
    @PostMapping("/boards/{boardId}/columns")
    public ApiResponse<BoardColumn> createColumn(@PathVariable Long boardId, @RequestBody BoardColumn column) {
        return ApiResponse.ok("列创建成功", scrumboardService.createColumn(boardId, column));
    }

    /**
     * 鏇存柊鍒?     * PUT /api/boards/{boardId}/columns/{columnId}
     */
    @PutMapping("/boards/{boardId}/columns/{columnId}")
    public ApiResponse<BoardColumn> updateColumn(@PathVariable Long columnId, @RequestBody BoardColumn column) {
        return ApiResponse.ok("列更新成功", scrumboardService.updateColumn(columnId, column));
    }

    /**
     * 鍒犻櫎鍒?     * DELETE /api/boards/{boardId}/columns/{columnId}
     */
    @DeleteMapping("/boards/{boardId}/columns/{columnId}")
    public ApiResponse<Void> deleteColumn(@PathVariable Long columnId) {
        scrumboardService.deleteColumn(columnId);
        return ApiResponse.ok("列删除成功", null);
    }

    /**
     * 鍒楁帓搴?     * PUT /api/boards/{id}/columns/reorder
     */
    @PutMapping("/boards/{boardId}/columns/reorder")
    public ApiResponse<Void> reorderColumns(@PathVariable Long boardId, @RequestBody Map<String, List<Long>> body) {
        List<Long> columnIds = body.get("columnIds");
        if (columnIds == null || columnIds.isEmpty()) {
            return ApiResponse.error("columnIds 涓嶈兘涓虹┖");
        }
        scrumboardService.reorderColumns(boardId, columnIds);
        return ApiResponse.ok("鎺掑簭鎴愬姛", null);
    }

    // ==================== Card ====================

    /**
     * 鑾峰彇鐪嬫澘鐨勬墍鏈夊崱鐗?     * GET /api/boards/{id}/cards
     */
    @GetMapping("/boards/{boardId}/cards")
    public ApiResponse<List<BoardCard>> listCards(@PathVariable Long boardId) {
        return ApiResponse.ok(scrumboardService.findCardsByBoardId(boardId));
    }

    /**
     * 鑾峰彇鍒楃殑鎵€鏈夊崱鐗?     * GET /api/boards/{boardId}/columns/{columnId}/cards
     */
    @GetMapping("/boards/{boardId}/columns/{columnId}/cards")
    public ApiResponse<List<BoardCard>> listCardsByColumn(@PathVariable Long columnId) {
        return ApiResponse.ok(scrumboardService.findCardsByColumnId(columnId));
    }

    /**
     * 鍒涘缓鍗＄墖
     * POST /api/boards/{boardId}/columns/{columnId}/cards
     */
    @PostMapping("/boards/{boardId}/columns/{columnId}/cards")
    public ApiResponse<BoardCard> createCard(
            @PathVariable Long boardId, @PathVariable Long columnId, @RequestBody BoardCard card) {
        return ApiResponse.ok("鍗＄墖鍒涘缓鎴愬姛", scrumboardService.createCard(boardId, columnId, card));
    }

    /**
     * 鏇存柊鍗＄墖
     * PUT /api/cards/{id}
     */
    @PutMapping("/cards/{id}")
    public ApiResponse<BoardCard> updateCard(@PathVariable Long id, @RequestBody BoardCard card) {
        return ApiResponse.ok("鍗＄墖鏇存柊鎴愬姛", scrumboardService.updateCard(id, card));
    }

    /**
     * 鍒犻櫎鍗＄墖
     * DELETE /api/cards/{id}
     */
    @DeleteMapping("/cards/{id}")
    public ApiResponse<Void> deleteCard(@PathVariable Long id) {
        scrumboardService.deleteCard(id);
        return ApiResponse.ok("鍗＄墖鍒犻櫎鎴愬姛", null);
    }

    /**
     * 绉诲姩鍗＄墖鍒版寚瀹氬垪鍜屼綅缃?     * POST /api/cards/{id}/move
     */
    @PostMapping("/cards/{id}/move")
    public ApiResponse<BoardCard> moveCard(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        Long targetColumnId = Long.valueOf(body.get("targetColumnId").toString());
        Integer targetPosition = body.get("targetPosition") != null
                ? Integer.valueOf(body.get("targetPosition").toString()) : null;
        return ApiResponse.ok("绉诲姩鎴愬姛", scrumboardService.moveCard(id, targetColumnId, targetPosition));
    }

    /**
     * 鍒楀唴鍗＄墖鎺掑簭
     * PUT /api/boards/{boardId}/columns/{columnId}/cards/reorder
     */
    @PutMapping("/boards/{boardId}/columns/{columnId}/cards/reorder")
    public ApiResponse<Void> reorderCards(
            @PathVariable Long columnId, @RequestBody Map<String, List<Long>> body) {
        List<Long> cardIds = body.get("cardIds");
        if (cardIds == null || cardIds.isEmpty()) {
            return ApiResponse.error("cardIds 涓嶈兘涓虹┖");
        }
        scrumboardService.reorderCards(columnId, cardIds);
        return ApiResponse.ok("鎺掑簭鎴愬姛", null);
    }
}
