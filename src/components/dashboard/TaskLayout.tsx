import React from 'react';
import Card from '../ui/Card';
import './TaskLayout.scss';

const TaskLayout: React.FC = () => {
  return (
    <div className="task-layout">
      {/* Task Details Panel (Left) */}
      <Card className="task-details-panel">
        <div className="detail-section">
          <h3>Description</h3>
          <p className="description">
            Electrical wires are hanging loose near the children's park area, 
            posing a safety hazard. Immediate attention required.
          </p>
          <div className="tags">
            <span className="tag">Electrical</span>
            <span className="tag">Safety</span>
            <span className="tag">Urgent</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Assigned Users</h3>
          <div className="assigned-users">
            <span className="user">John Doe</span>
            <div className="user-avatars">
              <div className="avatar">JD</div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Observers</h3>
          <div className="observers">
            <span className="user">Jane Smith</span>
            <div className="user-avatars">
              <div className="avatar">JS</div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Task Actions</h3>
          <div className="task-actions">
            <label className="checkbox">
              <input type="checkbox" />
              <span>Mark as urgent</span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>Notify supervisor</span>
            </label>
          </div>
        </div>

        <div className="detail-section">
          <h3>Relations</h3>
          <div className="relations">
            <div className="relation-item">
              <span className="relation-icon">🔗</span>
              <span>Related to SR-240</span>
            </div>
            <div className="relation-item">
              <span className="relation-icon">📋</span>
              <span>Part of Park Maintenance</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Insights</h3>
          <div className="insights">
            <div className="insight-item">
              <span className="insight-label">Priority</span>
              <span className="insight-value">High</span>
            </div>
            <div className="insight-item">
              <span className="insight-label">Estimated Time</span>
              <span className="insight-value">2-3 hours</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Task Main Content (Center) */}
      <Card className="task-main-content">
        <div className="content-tabs">
          <div className="tab active">Location</div>
          <div className="tab">Assets</div>
          <div className="tab">Attachments</div>
        </div>
        
        <div className="tab-content">
          <div className="location-info">
            <p><strong>Address:</strong> 123 Park Street, Downtown</p>
            <p><strong>Building:</strong> Central Park Complex</p>
            <p><strong>Floor:</strong> Ground Level</p>
          </div>
          
          <div className="maps-container">
            <div className="map-item">
              <h4>Floor Plan</h4>
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="floor-plan">Floor Plan View</div>
                  <div className="location-pin">📍</div>
                </div>
              </div>
            </div>
            
            <div className="map-item">
              <h4>Street Map</h4>
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="street-map">Street Map View</div>
                  <div className="location-pin">📍</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="attachments">
            <h4>Related Files</h4>
            <div className="attachment-item">
              <span className="attachment-icon">📄</span>
              <div className="attachment-info">
                <span className="attachment-name">Safety Guidelines.pdf</span>
                <span className="attachment-size">2.3 MB</span>
              </div>
            </div>
            <div className="attachment-item">
              <span className="attachment-icon">📷</span>
              <div className="attachment-info">
                <span className="attachment-name">Current State.jpg</span>
                <span className="attachment-size">1.8 MB</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Task Activity Panel (Right) */}
      <Card className="task-activity-panel">
        <div className="activity-tabs">
          <div className="tab active">Activity</div>
          <div className="tab">Comments</div>
        </div>
        
        <div className="activity-feed">
          <div className="activity-date">Today</div>
          
          <div className="activity-item">
            <div className="activity-header">
              <span className="activity-user">John Doe</span>
              <span className="activity-time">2 hours ago</span>
            </div>
            <div className="activity-content">
              <p>Task assigned to electrical team</p>
            </div>
          </div>
          
          <div className="activity-item">
            <div className="activity-header">
              <span className="activity-user">Jane Smith</span>
              <span className="activity-time">1 hour ago</span>
            </div>
            <div className="activity-content">
              <p>Added to urgent maintenance queue</p>
            </div>
          </div>
          
          <div className="activity-date">Yesterday</div>
          
          <div className="activity-item">
            <div className="activity-header">
              <span className="activity-user">Mike Johnson</span>
              <span className="activity-time">1 day ago</span>
            </div>
            <div className="activity-content">
              <p>Issue reported by park maintenance staff</p>
              <div className="comment">
                "Found loose wires near the playground area during routine inspection"
              </div>
            </div>
          </div>
        </div>
        
        <div className="add-comment">
          <div className="comment-input-container">
            <input 
              type="text" 
              className="comment-input" 
              placeholder="Add a comment..."
            />
            <button className="attachment-btn">📎</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskLayout;
