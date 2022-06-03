import "./Exp.scss";

function Exp(){
    return(
        <div className="exp-container">
            <div className="exp-local">
                <h1 className="exp-local-title">EXPERIÊNCIA</h1>
                <div className="exp-local-jobs">
                    <h1 className="exp-local-jobs-name">Sua empresa AQUI!</h1>
                </div>
                <div className="exp-local-jobs-ns">
                    <h1 className="exp-local-jobs-name">Vázio</h1>
                </div>
                <div className="exp-local-jobs-ns">
                    <h1 className="exp-local-jobs-name">Vázio</h1>
                </div>
            </div>
            <div className="exp-info">
                <div className="exp-info-title">
                    <h1 className="exp-info-title-func">Seu Desenvolvedor Web Front-End</h1>
                    <h2 className="exp-info-title-time">2022 - Atual</h2>
                </div>
                <h2 className="exp-info-name">Sua empresa</h2>
                <p className="exp-info-text">Me tenha como seu desenvolvedor Web, vamos criar nossa história juntos!</p>
            </div>
        </div>
    );
};

export default Exp;