import React from 'react';


export const StakingComponent = ({ data }) => {
  return (
    <>
      <section style={{
        border: '1px solid rgba(255, 255, 255, 0.25)',
        margin: '25px 10px 10px',
        borderRadius: '4px',
        color: 'white',
        background: '#15161b94'
      }}>
        <h3 style={{
          padding: '12px 16px',
          color: 'white',
        }}>Stacking Contact Info</h3>
        {data?.map((items, idx) => (
          <div key={idx} style={{
            display: 'flex',
            padding: '10px 16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.25)',
            justifyContent: 'space-between'
          }}>
            <div>{items.text}</div>
            <div style={{
              color: '#ADB0BB',
            }}>{items.data}</div>
          </div>
        ))}
      </section>
    </>
  )

}