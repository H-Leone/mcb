import Button from "./button";

interface IsAbleToShowProps {
    children: React.ReactElement;
}

function IsAbleToShow({ children }: IsAbleToShowProps) {
    const isAbleToShow = Boolean(process.env.IS_ABLE_TO_SHOW);

    if (!isAbleToShow) {
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
            <p>Estamos em ajuste! Favor entrar em contato<br />para mais informações</p>
            <Button>
                <a href="https://wa.me/5511995427107">Fale Conosco</a>
            </Button>
        </div>
    }

    return (
        <>
            {children}
        </>
    );
}

export default IsAbleToShow;