import * as _ from './lodash.js';

export interface IMembers {
  isInSearch: boolean;
  isSelected: boolean;
  name: string;
  newDimension: boolean;
  nonKeyUnique: string;
  uniqueName: string;
}

export interface IDimension {
  uniqueName: string;
  name: string;
  drilldownLevel: string;
  filterInfo: { includeFlag: boolean; members: IMembers[]; filterType: string; isDashboardFilter: boolean; };
  drilledUpMembers: any[];
  subtotalPos: string;
  isUserHierarchy: boolean;
  isAggregatable: boolean;
  valueFilterInfo?: any;
}

const obj1 = JSON.parse('[{"uniqueName":"[Date - Incurred].[daYear]","name":"Incurred Year","drilldownLevel":"","filterInfo":{"includeFlag":true,"members":[{"name":"2015","uniqueName":"[Date - Incurred].[daYear].&[2015]","nonKeyUnique":"[Date - Incurred].[daYear].[2015]","newDimension":true,"isInSearch":true,"isSelected":true},{"name":"2016","uniqueName":"[Date - Incurred].[daYear].&[2016]","nonKeyUnique":"[Date - Incurred].[daYear].[2016]","newDimension":true,"isInSearch":true,"isSelected":true}],"filterType":"member"},"drilledUpMembers":[],"subtotalPos":"before","isUserHierarchy":false,"isAggregatable":true,"valueFilterInfo":{}}]')
const obj2: IDimension = obj1;

const result = _.isEqual(obj1, obj2)
console.log(result);


var deepEqual = function (x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;
  
      for (var prop in x) {
          console.log(prop)
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
  }

const test = deepEqual(obj1, obj2)
console.log(test);
