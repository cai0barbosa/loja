import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ProductCharacteristicsDTO } from './productcharacteristics.dto';
import { ProductImageDTO } from './productimages.dto';
import { Type } from 'class-transformer';

export class ProductCreateDTO {
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsInt()
  @Min(0)
  valor: number;

  @IsNumber()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @MinLength(100)
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductCharacteristicsDTO)
  caracteristicas: ProductCharacteristicsDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  imagens: ProductImageDTO[];

  @IsNotEmpty()
  categoria: string;
}
