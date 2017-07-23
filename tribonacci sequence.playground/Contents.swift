func tribonacci(_ signature: [Int], _ n: Int) -> [Int] {
    guard n > 3 else {
        return Array(signature.prefix(n))
    }
    
    var result = signature
    var next = result.reduce(0, + )
    for index in 0..<(n - 3) {
        result.append(next)
        next = next * 2 - result[index]
    }
    return result
}
tribonacci([1,1,1], 10)
