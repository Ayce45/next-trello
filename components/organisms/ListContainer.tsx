import List from "../molecules/List";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

const ListContainer = () => (
    <div className="flex items-start mt-[6px] gap-2">
        <List title="My first list">
            <Card title="My first card" list="My first list" follow={false} />
            <Card title="My second card" list="My first list" follow={false} />
            <Card title="Followed card" list="My first list" follow={true} />
        </List>
        <List title="My second list">
            <Card title="Followed card with description" list="My second list" description="My first description" follow={true} />
        </List>
        <form action="" className="bg-[#ffffff3d] rounded-[3px] flex flex-col hover:bg-[#ffffff52] transition-[background_85ms_ease-in_0s]">
            <Button type="tertiary">Ajouter une autre liste</Button>
        </form>
    </div>
);

export default ListContainer