package main

import (
	"time"
)

type Timer struct {
	start_timestamp time.Time
	end_timestamp   time.Time
}

func (t *Timer) EndCountdown() {
	t.start_timestamp = time.Now()
}

func (t *Timer) Click() {
	t.end_timestamp = time.Now()
}

func (t *Timer) ClickTimeDifference() float64 {
	return t.end_timestamp.Sub(t.start_timestamp).Seconds()
}

func (t *Timer) StartTimestamp() int {
	return t.start_timestamp.Nanosecond()
}

func (t *Timer) EndTimestamp() int {
	return t.end_timestamp.Nanosecond()
}

func (t *Timer) Reset() {
	t.start_timestamp = time.Time{}
	t.end_timestamp = time.Time{}
}
