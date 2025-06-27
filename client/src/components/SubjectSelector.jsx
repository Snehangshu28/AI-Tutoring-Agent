import React from 'react'

const SubjectSelector = ({ selectedSubject, onSubjectChange, grade, onGradeChange }) => {
  const subjects = [
    'General',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'English Literature',
    'History',
    'Geography',
    'Economics',
    'Psychology',
    'Art',
    'Music'
  ]

  const grades = [
    'Any',
    'Elementary (K-5)',
    'Middle School (6-8)',
    'High School (9-12)',
    'College',
    'University'
  ]

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="input-field"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
          Grade Level
        </label>
        <select
          id="grade"
          value={grade}
          onChange={(e) => onGradeChange(e.target.value)}
          className="input-field"
        >
          {grades.map((gradeOption) => (
            <option key={gradeOption} value={gradeOption}>
              {gradeOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SubjectSelector 