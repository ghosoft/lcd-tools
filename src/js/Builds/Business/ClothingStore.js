import {Building, BuildingNames, BuildingRarity, BuildingType} from "../../Building";
import {Buff, BuffRange} from "../../Buff";

class ClothingStore extends Building{
    constructor(){
        super(BuildingNames.ClothingStore,BuildingRarity.Common,BuildingType.Business,1);
        this.initBuffs();
    }

    initBuffs(){
        this.buffs.push(new Buff(BuffRange.Targets,BuildingNames.TextileMill,1));
    }
}

export default ClothingStore