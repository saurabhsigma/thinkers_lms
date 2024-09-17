"use client"

import React from 'react';
import styles from './pages.module.css'; // Import the CSS module
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors } from 'chart.js';
import Nav from '../../components/Nav';
import Chapters from '@/components/Chapters';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const checkingSomething = false;
const Dashboard = () => {
  // Demo data
  const courses = [
    { id: 1, name: 'Mathematics 101', progress: 75 },
    { id: 2, name: 'History 202', progress: 50 },
    { id: 3, name: 'Biology 303', progress: 90 },
    { id: 1, name: 'Mathematics 101', progress: 75 },
    { id: 2, name: 'History 202', progress: 50 },
    { id: 3, name: 'Biology 303', progress: 90 },
    { id: 1, name: 'Mathematics 101', progress: 75 },
   
  ];

  const assignments = [
    { id: 1, title: 'Math Homework', dueDate: '2024-09-05' },
    { id: 2, title: 'History Essay', dueDate: '2024-09-10' },
    { id: 3, title: 'Biology Lab Report', dueDate: '2024-09-15' },
  ];

  const recentActivity = [
    { id: 1, activity: 'Completed Mathematics 101 Quiz', date: '2024-09-01' },
    { id: 2, activity: 'Uploaded History 202 Draft', date: '2024-08-30' },
    { id: 3, activity: 'Started Biology 303 Lecture Notes', date: '2024-08-28' },
  ];

  const announcements = [
    { id: 1, message: 'School will be closed on September 6 for maintenance.' },
    { id: 2, message: 'New office hours for academic advising starting September 10.' },
    { id: 3, message: 'Reminder: Register for fall semester courses by September 15.' },
  ];


  
  const chartData = {
    labels: courses.map(course => course.name),
    datasets: [{
      label: 'Course Progress',
      data: courses.map(course => course.progress),
      backgroundColor: '#00796b',
    }],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const handleLogout = () => {
    alert('Logged out');
  };

  const handleMenuClick = () => {
    alert('Menu clicked');
  };

  return (
    <div className={styles.container}>
      < Nav />

      <main className={styles.main}>
        <div className={styles.gridContainer}>

          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Profile</h2>
            <div className={styles.profileContainer}>
              <div className={styles.profilePic}></div>
              <div className={styles.profileInfo}>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
              </div>
            </div>
          </div>


          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Course Progress</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Upcoming Assignments</h2>
            <ul>
              {assignments.map(assignment => (
                <li key={assignment.id} className={styles.assignmentItem}>
                  <span>{assignment.title}</span>
                  <span className={styles.dueDate}>Due: {assignment.dueDate}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Chapters</h2>
            <Chapters />
          </div>

          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Recent Activity</h2>
            <ul>
              {recentActivity.map(activity => (
                <li key={activity.id} className={styles.activityItem}>
                  <span>{activity.activity}</span>
                  <span className={styles.activityDate}>{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* this is a comment just writing something to test */}
          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Announcements</h2>
            <ul>
              {announcements.map(announcement => (
                <li key={announcement.id} className={styles.announcementItem}>
                  <span>{announcement.message}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Calendar</h2>
            <p>Integrate a calendar view here to track events, deadlines, and important dates.</p>
            <div className={styles.calendarPlaceholder}>
              <p>Calendar Integration Coming Soon</p>
            </div>
          </div>

          <div className={styles.cardHalfWidth}>
            <h2 className={styles.cardTitle}>Contact Support</h2>
            <p>If you need help, please reach out to the support team:</p>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +1-234-567-8901</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Student Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
