function Grid($scope) {
    var grid = [], gridSize = 10;
    for (var i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (var j = 0; j < gridSize; j++) {
            grid[i][j] = 0;
        }
    }

    $scope.grid = grid;

    $scope.toggle = function(x, y) {
        $scope.grid[y][x] = ($scope.grid[y][x] == 1) ? 0 : 1;
    }
}