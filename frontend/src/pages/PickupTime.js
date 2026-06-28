import React, { useState } from "react";
import "./PickupTime.css";
import { FaClock } from "react-icons/fa";

function PickupTime() {
    const [selectedTime, setSelectedTime] = useState("");

    // Function to generate pickup time slots dynamically
    const generateTimeSlots = () => {
        const slots = [];
        const currentTime = new Date();

        // First pickup slot starts 15 minutes after the current time
        currentTime.setMinutes(currentTime.getMinutes() + 15);

        // Generate 8 pickup slots with 15-minute intervals
        for (let i = 0; i < 8; i++) {
            slots.push(
                currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })
            );

            // Add 15 minutes for the next slot
            currentTime.setMinutes(currentTime.getMinutes() + 15);
        }

        return slots;
    };

    const timeSlots = generateTimeSlots();

    return (
        <div className="pickup-page">
            <div className="pickup-card">

              <h2 className="pickup-title">
    <FaClock className="clock-icon" />
    Select Pickup Time
</h2>  

                <div className="time-grid">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            className={
                                selectedTime === time
                                    ? "time-btn active"
                                    : "time-btn"
                            }
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>

                {selectedTime && (
                    <div className="selected-time">
                        <p>
                            <strong>Selected Pickup Time:</strong> {selectedTime}
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default PickupTime;