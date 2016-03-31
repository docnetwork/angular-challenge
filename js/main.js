var myApp = angular.module('root', []);

indexController = myApp.controller("index", ["$scope", function ($scope) {
    $scope.fib_step = 0;
    $scope.fib_sequence = [0,1];
    
    $scope.reset = function() {
        $scope.fib_step = 0;
    }

//////////////////////////////////////////////////////////////////////////
///////////////////////iteration  approach////////////////////////////////
    $scope.next_fib_iter = function() {
        next = $scope.fib_sequence[$scope.fib_step + 1];
        prev = $scope.fib_sequence[$scope.fib_step - 1];
        if(next == undefined) {
            if(prev != undefined) {
                $scope.fib_sequence[$scope.fib_step + 1] = $scope.fib_sequence[$scope.fib_step] + prev;
            }else {
                $scope.fib_sequence[$scope.fib_step + 1] = $scope.fib_at_n_iter($scope.fib_step + 1);
            }
        }
        $scope.fib_step += 1;
    }

    $scope.fib_at_n_iter = function(n) {
        if(n == 0){return 0}
        x = 0
        y = 1
        for(i = 1; i < n; i++) {
            z = x + y
            x = y
            y = z
        }
        return y;
    }

//////////////////////////////////////////////////////////////////////////
///////////////////////recursion  approach////////////////////////////////
    $scope.fib_at_n_recursivly = function(n) {
        if($scope.fib_sequence[n] != undefined) {
           return $scope.fib_sequence[n];
        }
        if(n == 0) {
            return 0;
        }
        if(n == 1) {
            return 1;
        }
        value = $scope.fib_at_n_recursivly(n-1) + $scope.fib_at_n_recursivly(n-2);
        return value;
    }

    $scope.next_fib_recurs = function() {
        $scope.fib_sequence[$scope.fib_step + 1] = $scope.fib_at_n_recursivly($scope.fib_step + 1);
        $scope.fib_step += 1;
    }

//////////////////////////////////////////////////////////////////////////
///////////////////////personal  approach/////////////////////////////////
    $scope.cur_fib = 0;
    $scope.prev_fib = -1;
    $scope.simple_reset = function() {
        $scope.cur_fib = 0;
        $scope.prev_fib = -1;
    }
    $scope.simple_next = function() {
        if($scope.prev_fib == -1)
            $scope.prev_fib = 1; 
        
        t = $scope.cur_fib;
        $scope.cur_fib = t + $scope.prev_fib;
        $scope.prev_fib = t;
    }
}]);