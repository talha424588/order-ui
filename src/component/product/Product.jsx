import "./Product.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

function Product() {
  const [timerValue, setTimerValue] = useState(280); // 180 seconds = 3 minutes
  const [borderColor, setBorderColor] = useState('#000'); // Initial border color

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue(prevValue => prevValue - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateRemainingTime = () => {
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    return { minutes, seconds };
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span className="time_counter">00:00</span>;
    } else {
      const { minutes: remainingMinutes } = calculateRemainingTime();

      
      if (remainingMinutes < 3) {
        setBorderColor('#FF0000');
      } else {
        setBorderColor('#7AB915'); // Reset border color
      }

      return (
        <span className="time_counter" style={{ borderColor }}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      );
    }
  };

  return (
    <>
      <div className="container product_container">
        <div className="items">
          <div className="card card-custom item">
            <img
              className="card-img-top"
              src="https://s3-alpha-sig.figma.com/img/f361/0089/679bb310855961020557a9dceefe42df?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxnUvFDM3NhfCkZQTZXjFdCEjqs5Fo53I1ZIhJrWAKDeINLxS0DGArH9JW6HYFOSBFvBKzCoZCt5xzoZJ517ERbvSwqj1EMBCWJp6qT~rY1RMNVjxqnLilew7GKCyUzj3xNpHIjYs7YKJdsT6rvg9HtpnHCDwCKbaBFtYx91qlVDVK4~Ir~yQMd0khUW3FtrcJMnNqejqdidQDVmqKZ9nhuRaa4U-5bSJ-c7GecEj8877sYgK427zQm6KOuzFT0T-sYJmJh16b3kWCF32smp7~cht227vARzR3Yf72Chr~qS-DNYeSoJMREw6bys7bn~LNSlHwXG9v94wYI5cLXkQQ__"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
          <div className="card card-custom item">
            <img
              className="card-img-top"
              src="https://s3-alpha-sig.figma.com/img/f361/0089/679bb310855961020557a9dceefe42df?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxnUvFDM3NhfCkZQTZXjFdCEjqs5Fo53I1ZIhJrWAKDeINLxS0DGArH9JW6HYFOSBFvBKzCoZCt5xzoZJ517ERbvSwqj1EMBCWJp6qT~rY1RMNVjxqnLilew7GKCyUzj3xNpHIjYs7YKJdsT6rvg9HtpnHCDwCKbaBFtYx91qlVDVK4~Ir~yQMd0khUW3FtrcJMnNqejqdidQDVmqKZ9nhuRaa4U-5bSJ-c7GecEj8877sYgK427zQm6KOuzFT0T-sYJmJh16b3kWCF32smp7~cht227vARzR3Yf72Chr~qS-DNYeSoJMREw6bys7bn~LNSlHwXG9v94wYI5cLXkQQ__"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
          <div className="card card-custom item">
            <img
              className="card-img-top"
              src="https://s3-alpha-sig.figma.com/img/f361/0089/679bb310855961020557a9dceefe42df?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxnUvFDM3NhfCkZQTZXjFdCEjqs5Fo53I1ZIhJrWAKDeINLxS0DGArH9JW6HYFOSBFvBKzCoZCt5xzoZJ517ERbvSwqj1EMBCWJp6qT~rY1RMNVjxqnLilew7GKCyUzj3xNpHIjYs7YKJdsT6rvg9HtpnHCDwCKbaBFtYx91qlVDVK4~Ir~yQMd0khUW3FtrcJMnNqejqdidQDVmqKZ9nhuRaa4U-5bSJ-c7GecEj8877sYgK427zQm6KOuzFT0T-sYJmJh16b3kWCF32smp7~cht227vARzR3Yf72Chr~qS-DNYeSoJMREw6bys7bn~LNSlHwXG9v94wYI5cLXkQQ__"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
          <div className="card card-custom item">
            <img
              className="card-img-top"
              src="https://s3-alpha-sig.figma.com/img/f361/0089/679bb310855961020557a9dceefe42df?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxnUvFDM3NhfCkZQTZXjFdCEjqs5Fo53I1ZIhJrWAKDeINLxS0DGArH9JW6HYFOSBFvBKzCoZCt5xzoZJ517ERbvSwqj1EMBCWJp6qT~rY1RMNVjxqnLilew7GKCyUzj3xNpHIjYs7YKJdsT6rvg9HtpnHCDwCKbaBFtYx91qlVDVK4~Ir~yQMd0khUW3FtrcJMnNqejqdidQDVmqKZ9nhuRaa4U-5bSJ-c7GecEj8877sYgK427zQm6KOuzFT0T-sYJmJh16b3kWCF32smp7~cht227vARzR3Yf72Chr~qS-DNYeSoJMREw6bys7bn~LNSlHwXG9v94wYI5cLXkQQ__"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
          <div className="card card-custom item">
            <img
              className="card-img-top"
              src="https://s3-alpha-sig.figma.com/img/f361/0089/679bb310855961020557a9dceefe42df?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxnUvFDM3NhfCkZQTZXjFdCEjqs5Fo53I1ZIhJrWAKDeINLxS0DGArH9JW6HYFOSBFvBKzCoZCt5xzoZJ517ERbvSwqj1EMBCWJp6qT~rY1RMNVjxqnLilew7GKCyUzj3xNpHIjYs7YKJdsT6rvg9HtpnHCDwCKbaBFtYx91qlVDVK4~Ir~yQMd0khUW3FtrcJMnNqejqdidQDVmqKZ9nhuRaa4U-5bSJ-c7GecEj8877sYgK427zQm6KOuzFT0T-sYJmJh16b3kWCF32smp7~cht227vARzR3Yf72Chr~qS-DNYeSoJMREw6bys7bn~LNSlHwXG9v94wYI5cLXkQQ__"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
          <div className="card card-custom item">
            <img
              className="card-img-top"
              src="https://s3-alpha-sig.figma.com/img/f361/0089/679bb310855961020557a9dceefe42df?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GxnUvFDM3NhfCkZQTZXjFdCEjqs5Fo53I1ZIhJrWAKDeINLxS0DGArH9JW6HYFOSBFvBKzCoZCt5xzoZJ517ERbvSwqj1EMBCWJp6qT~rY1RMNVjxqnLilew7GKCyUzj3xNpHIjYs7YKJdsT6rvg9HtpnHCDwCKbaBFtYx91qlVDVK4~Ir~yQMd0khUW3FtrcJMnNqejqdidQDVmqKZ9nhuRaa4U-5bSJ-c7GecEj8877sYgK427zQm6KOuzFT0T-sYJmJh16b3kWCF32smp7~cht227vARzR3Yf72Chr~qS-DNYeSoJMREw6bys7bn~LNSlHwXG9v94wYI5cLXkQQ__"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container ins_container">
        <div className="row ins_row">
          <div className="col-lg-6 ins">
            <div className="ins_section">
              <div className="ins_header">
                <h1 className="instruction_heading">Specific instructions:</h1>
              </div>
              <div className="instruction_content">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 timer_counter">
            <div className="next_order_section">
              <div className="next_order_heading">
                <h1 className="next_order_heading">TIME TILL NEXT ORDER</h1>
              </div>
              <div className="counter">
              <Countdown
                  date={Date.now() + timerValue * 1000}
                  renderer={renderer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
