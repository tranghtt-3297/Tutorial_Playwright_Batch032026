class Counter {
  count: number = 0;

  // Method increment
  increment(): void {
    this.count++;
    console.log(`Count is now: ${this.count}`);
  }

  // Method reset
  reset(): void {
    this.count = 0;
    console.log("Counter reset");
  }
}

// Cret instance
const counter = new Counter();

// Gọi method
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.reset();