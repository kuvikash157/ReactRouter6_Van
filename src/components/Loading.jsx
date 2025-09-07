const Loading = () => {
    return (
        <>
            <style>
                {`
          @keyframes load {
            0% {
              background-position: 100% 2%;
            }
            100% {
              background-position: 1% 0%;
            }
          }
        `}
            </style>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <div
                    style={{
                        position: 'relative',
                        top: '10vh',
                        left: '25vw',
                        width: '50vw',
                        height: '6px',
                        border: 'none',
                        borderRadius: '5px',
                        background: 'linear-gradient(to left, rgba(174, 90, 90, 0.41) 50% , #f00 50%)',
                        backgroundSize: '200% 200%',
                        animation: 'load 3s infinite',
                        zIndex: '1'
                    }}
                />
            </div>
        </>
    );
};

export default Loading;