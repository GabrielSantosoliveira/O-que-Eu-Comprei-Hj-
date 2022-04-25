const Conteiner = ({ children }) => {
    return (
        <>
            <div>{children}</div>

            <style jsx>
                {`
                    div {
                        width: 100vw;
                    }

                    @media (min-width: 400px) {
                        div {
                            margin: 0 auto;
                            width: 400px;
                        }
                    }

                    @media (min-width: 758px) {
                        div {
                            margin: 0 auto;
                            width: 758px;
                        }
                    }


                    @media (min-width: 1024px) {
                        div {
                            margin: 0 auto;
                            width: 900px;
                        }
                    }
                `}
            </style>
        </>
    );
};
export default Conteiner;
