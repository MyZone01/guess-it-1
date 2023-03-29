import statistics

numbers = []
for line in iter(input, ''):
    num = int(line)
    numbers.append(num)
    avg = statistics.mean(numbers)
    std_dev = statistics.stdev(numbers, xbar=avg)
    lower_limit = round(avg - 1.28 * std_dev)
    upper_limit = round(avg + 1.28 * std_dev)
    print(f"{lower_limit} {upper_limit}")
