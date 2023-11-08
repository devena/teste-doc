

  /* 
   * Copyright (C) 2023 Devena Tecnologia e Inovação LTDA - All Rights Reserved
  */

  export {};
  
  declare global{
    
    export function print(args:any):void;
  
  
  export class HashMap<K,V> {
	clear():void
	clone():Object
	containsKey(key:any):boolean
	containsValue(value:any):boolean
	get(key:any):V
	isEmpty():boolean
	keySet():Set<K>
	put(key:K, value:V):V
	putAll(value: HashMap<K,V>):void
	remove(key:any):V
	size():Integer
	values():ArrayList<V>
}


export class ArrayList<E> {
	add(index:Integer, element:E):void
	add(e:E):boolean
	addAll(value:ArrayList<E>):boolean
	clear():void
	clone():Object
	contains(o:any):boolean
	equals(o:any):boolean
	get(index:Integer):E
	hashCode():Integer
	indexOf(o:any):Integer
	isEmpty():boolean
	lastIndexOf(o:any):Integer
	remove(index:Integer):E
	remove(o:any):boolean
	removeAll(c:ArrayList<any>):boolean
	set(index:Integer, element:E):E
	size():Integer
	subList(fromIndex:Integer, toIndex:Integer):ArrayList<E>
	toArray():E[]
	trimToSize():void
}


export class Integer {
	compareTo(anotherInteger:Integer):Integer
	equals(obj:any):boolean
	hashCode():Integer
	intValue():Integer
	longValue():Long
	toString():String
}

export namespace Integer.static {
	export function compare(x:Integer, y:Integer): Integer
	export function compareUnsigned(x:Integer, y:Integer): Integer
	export function getInteger(nm:String): Integer
	export function getInteger(nm:String, val:Integer): Integer
	export function getInteger(nm:String, val:Integer): Integer
	export function max(a:Integer, b:Integer): Integer
	export function min(a:Integer, b:Integer): Integer
	export function parseInt(s:String): Integer
	export function parseInt(s:String, radix:Integer): Integer
	export function valueOf(i:Integer): Integer
	export function valueOf(s:String): Integer
	export function valueOf(s:String, radix:Integer): Integer
}


export class Long {
	compareTo(anotherLong:Long):Integer
	equals(obj:any):boolean
	hashCode():Integer
	intValue():Integer
	longValue():Long
	toString():String
}

export namespace Long.static {
	export function compare(x:Long, y:Long): Integer
	export function compareUnsigned(x:Long, y:Long): Integer
	export function getLong(nm:String): Long
	export function getLong(nm:String, val:Long): Long
	export function getLong(nm:String, val:Long): Long
	export function hashCode(value:Long): Integer
	export function highestOneBit(i:Long): Long
	export function lowestOneBit(i:Long): Long
	export function max(a:Long, b:Long): Long
	export function min(a:Long, b:Long): Long
	export function numberOfLeadingZeros(i:Long): Integer
	export function numberOfTrailingZeros(i:Long): Integer
	export function parseLong(s:String): Long
	export function parseLong(s:String, radix:Integer): Long
	export function parseUnsignedLong(s:String): Long
	export function parseUnsignedLong(s:String, radix:Integer): Long
	export function remainderUnsigned(dividend:Long, divisor:Long): Long
	export function reverse(i:Long): Long
	export function reverseBytes(i:Long): Long
	export function rotateLeft(i:Long, distance:Integer): Long
	export function rotateRight(i:Long, distance:Integer): Long
	export function signum(i:Long): Integer
	export function sum(a:Long, b:Long): Long
	export function toBinaryString(i:Long): String
	export function toHexString(i:Long): String
	export function toOctalString(i:Long): String
	export function toString(i:Long): String
	export function toString(i:Long, radix:Integer): String
	export function toUnsignedString(i:Long): String
	export function toUnsignedString(i:Long, radix:Integer): String
	export function valueOf(l:Long): Long
	export function valueOf(s:String): Long
	export function valueOf(s:String, radix:Integer): Long
}


export class BigDecimal {
	abs():BigDecimal
	add(augend:BigDecimal):BigDecimal
	compareTo(val:BigDecimal):Integer
	divide(divisor:BigDecimal):BigDecimal
	divide(divisor:BigDecimal, roundingMode:Integer):BigDecimal
	divide(divisor:BigDecimal, scale:Integer, roundingMode:Integer):BigDecimal
	divide(divisor:BigDecimal, scale:Integer, roundingMode:RoundingMode):BigDecimal
	divide(divisor:BigDecimal, roundingMode:RoundingMode):BigDecimal
	divideAndRemainder(divisor:BigDecimal):BigDecimal[]
	divideToIntegralValue(divisor:BigDecimal):BigDecimal
	equals(x:any):boolean
	hashCode():Integer
	intValue():Integer
	intValueExact():Integer
	longValue():Long
	longValueExact():Long
	max(val:BigDecimal):BigDecimal
	min(val:BigDecimal):BigDecimal
	movePointLeft(n:Integer):BigDecimal
	movePointRight(n:Integer):BigDecimal
	multiply(multiplicand:BigDecimal):BigDecimal
	negate():BigDecimal
	plus():BigDecimal
	pow(n:Integer):BigDecimal
	remainder(divisor:BigDecimal):BigDecimal
	scale():Integer
	scaleByPowerOfTen(n:Integer):BigDecimal
	setScale(newScale:Integer):BigDecimal
	setScale(newScale:Integer, roundingMode:Integer):BigDecimal
	setScale(newScale:Integer, roundingMode:RoundingMode):BigDecimal
	signum():Integer
	stripTrailingZeros():BigDecimal
	subtract(subtrahend:BigDecimal):BigDecimal
	toBigInteger():BigInteger
	toBigIntegerExact():BigInteger
	toEngineeringString():String
	toPlainString():String
	toString():String
	ulp():BigDecimal
	unscaledValue():BigInteger
}

export namespace BigDecimal.static {
	export var ZERO:BigDecimal;
	export function valueOf(val:number): BigDecimal
	export function valueOf(val:Long): BigDecimal
	export function valueOf(unscaledVal:Long, scale:Integer): BigDecimal
}

export type RoundingMode = RoundingMode.static.RoundingMode;
export namespace RoundingMode.static {
    export interface RoundingMode {}

    export const CEILING: RoundingMode;
    export const DOWN: RoundingMode;
    export const FLOOR: RoundingMode;
    export const HALF_DOWN: RoundingMode;
    export const HALF_EVEN: RoundingMode;
    export const HALF_UP: RoundingMode;
    export const UNNECESSARY: RoundingMode;
    export const UP: RoundingMode;
	
}



export class DateTime {
	minus(duration:Long):DateTime
	minusDays(days:Integer):DateTime
	minusHours(hours:Integer):DateTime
	minusMillis(millis:Integer):DateTime
	minusMinutes(minutes:Integer):DateTime
	minusMonths(months:Integer):DateTime
	minusSeconds(seconds:Integer):DateTime
	minusWeeks(weeks:Integer):DateTime
	minusYears(years:Integer):DateTime
	plus(duration:Long):DateTime
	plusDays(days:Integer):DateTime
	plusHours(hours:Integer):DateTime
	plusMillis(millis:Integer):DateTime
	plusMinutes(minutes:Integer):DateTime
	plusMonths(months:Integer):DateTime
	plusSeconds(seconds:Integer):DateTime
	plusWeeks(weeks:Integer):DateTime
	plusYears(years:Integer):DateTime
	toDateTime():DateTime
	toDateTimeISO():DateTime
	withCenturyOfEra(centuryOfEra:Integer):DateTime
	withDate(year:Integer, monthOfYear:Integer, dayOfMonth:Integer):DateTime
	withDayOfMonth(dayOfMonth:Integer):DateTime
	withDayOfWeek(dayOfWeek:Integer):DateTime
	withDayOfYear(dayOfYear:Integer):DateTime
	withDurationAdded(durationToAdd:Long, scalar:Integer):DateTime
	withEarlierOffsetAtOverlap():DateTime
	withEra(era:Integer):DateTime
	withHourOfDay(hour:Integer):DateTime
	withLaterOffsetAtOverlap():DateTime
	withMillis(newMillis:Long):DateTime
	withMillisOfDay(millis:Integer):DateTime
	withMillisOfSecond(millis:Integer):DateTime
	withMinuteOfHour(minute:Integer):DateTime
	withMonthOfYear(monthOfYear:Integer):DateTime
	withSecondOfMinute(second:Integer):DateTime
	withTime(hourOfDay:Integer, minuteOfHour:Integer, secondOfMinute:Integer, millisOfSecond:Integer):DateTime
	withTimeAtStartOfDay():DateTime
	withWeekOfWeekyear(weekOfWeekyear:Integer):DateTime
	withWeekyear(weekyear:Integer):DateTime
	withYear(year:Integer):DateTime
	withYearOfCentury(yearOfCentury:Integer):DateTime
	withYearOfEra(yearOfEra:Integer):DateTime
}

export namespace DateTime.static {
	export function now(): DateTime
}


export class HashSet<E> {
	add(e:E):boolean
	clear():void
	clone():Object
	contains(o:any):boolean
	isEmpty():boolean
	remove(o:any):boolean
	size():Integer
	toArray():Object[]
}



export type AnexoContentType = AnexoContentType.static.AnexoContentType;
export namespace AnexoContentType.static {
    export interface AnexoContentType {}

    export const WEBPI: AnexoContentType;
export const WEBPB: AnexoContentType;
export const BMP: AnexoContentType;
export const JPEG: AnexoContentType;
export const PDF: AnexoContentType;
export const PNG: AnexoContentType;
export const GIF: AnexoContentType;
export const SVG: AnexoContentType;
export const DOC: AnexoContentType;
export const DOCX: AnexoContentType;
export const PPT: AnexoContentType;
export const PPTX: AnexoContentType;
export const XLS: AnexoContentType;
export const XLSX: AnexoContentType;
export const HTML: AnexoContentType;
export const MP4: AnexoContentType;
export const AVI: AnexoContentType;
export const FLV: AnexoContentType;
export const WMV: AnexoContentType;
export const MOV: AnexoContentType;
export const MPG: AnexoContentType;
export const TGP: AnexoContentType;
export const MP3: AnexoContentType;
export const OGG: AnexoContentType;
export const ZIP: AnexoContentType;
export const XML: AnexoContentType;
	
}


export class JavaFile {

}


export namespace Map{
	export interface Entry<K,V> {
		equals(o:any):boolean
		getKey():K
		getValue():V
		hashCode():Integer
		setValue(value:V):V
	}
}
export namespace ClientBaseDAO {
	export function insert<T>(t:T):Integer
	export function insertMap​(nomeTabela:String, campos:HashMap<String,any>):Integer
	export function rodarDelete​(sql:String, ...params:any):void
	export function rodarInsert​(sql:String, ...params:any):Integer
	export function rodarSelect​<E>(sql:String, clazz:E, ...params:any): E
	export function rodarSelectList​<E>(sql:String, clazz:E, ...params:any): ArrayList<E>
	export function rodarUpdate​(sql:String, ...params:any):Integer
	export function update<T>(t:T):Integer
	export function updateMap​(nomeTabela:String, campos:HashMap<String,any>, where:HashMap<String,any>):Integer
}

export namespace CacheJsComponent {
	export function adicionar​(key:String, value:any):void
	export function adicionarSeNaoExistir​(key:String, value:any):void
	export function existe​(key:String):boolean
	export function remover​(key:String):void
}

export class JSException {
	getArgs():any[]
	getKey():String
	getMessage():String
	isNotificarNoTegram():boolean
}

export namespace AcabamentoJSService {
	export function buscaPorCodigoIntegracao​(codigo:String):Acabamento
	export function buscaPorId​(id:String):Acabamento
	export function salvar​(value:Acabamento):Acabamento
}

export namespace ClienteJSService {
	export function desbloquear​(id:String):void
	export function buscaPorCodigoIntegracao​(codigo:String):Cliente
	export function buscaPorId​(id:String):Cliente
}

export class ArrayListJSUtils {
}

export namespace ArrayListJSUtils.static {
	export function ehVazio​(collection:ArrayList<any>):boolean
	export function isEmpty​(collection:ArrayList<any>):boolean
	export function isNotEmpty​(collection:ArrayList<any>):boolean
	export function naoEhVazio​(collection:ArrayList<any>):boolean
}

export class BigDecimalJSUtils {
}

export namespace BigDecimalJSUtils.static {
	export function dividir​(dividendo:any, divisor:any):BigDecimal
	export function ehDiferente​(value1:any, value2:any):boolean
	export function ehIgual​(value1:any, value2:any):boolean
	export function ehMaior​(test:any, compareTo:any):boolean
	export function ehMaiorOuIgual​(test:any, compareTo:any):boolean
	export function ehMaiorQueZero​(test:any):boolean
	export function ehMenor​(test:any, compareTo:any):boolean
	export function ehMenorOuIgual​(test:any, compareTo:any):boolean
	export function ehZero​(value:any):boolean
	export function ehZeroOrNull​(value:any):boolean
	export function multiplicar​(multiplicando:any, multiplicador:any):BigDecimal
	export function of​(value:any):BigDecimal
	export function setarEscala​(valor:any, casas:any, modo:RoundingMode):BigDecimal
	export function somar​(n1:any, n2:any):BigDecimal
	export function subtrair​(n1:any, n2:any):BigDecimal
}

export class BooleanJsUtils {
}

export namespace BooleanJsUtils.static {
	export function ehFalso​(valor:any):boolean
	export function ehNull​(valor:any):boolean
	export function ehVerdadeiro​(valor:any):boolean
}

export class DateTimeJSUtils {
}

export namespace DateTimeJSUtils.static {
	export function diferencaEmDias​(date1:DateTime, date2:DateTime):Integer
	export function diferencaEmHoras​(date1:DateTime, date2:DateTime):Integer
}

export class IntegerJSUtils {
}

export namespace IntegerJSUtils.static {
	export function asInteger​(value:any):Integer
	export function dividir​(dividendo:any, divisor:any):Integer
	export function ehIgual​(value1:any, value2:any):boolean
	export function ehMaior​(test:any, compareTo:any):boolean
	export function ehMaiorOuIgual​(test:any, compareTo:any):boolean
	export function ehMenor​(test:any, compareTo:any):boolean
	export function ehMenorOuIgual​(test:any, compareTo:any):boolean
	export function multiplicar​(multiplicando:any, multiplicador:any):Integer
	export function somar​(n1:any, n2:any):Integer
	export function subtrair​(n1:any, n2:any):Integer
}

export class JsonJSUtils {
}

export namespace JsonJSUtils.static {
	export function clone​<T>(obj:T): T
	export function parsearData​(json:String):DateTime
	export function parseMetadados​(metadados:String):HashMap<String,​any>
	export function parseObservadores​(observadores:String):HashSet<String>
	export function parseParaClasse​<T>(json:String, classe:(new () => T)): T
	export function parseTags​(tags:String):HashSet<String>
	export function toJson​(val:any):String
}

export class StringJSUtils {
}

export namespace StringJSUtils.static {
	export function contains​(value:any, valor:String):boolean
	export function ehVazio​(value:any):boolean
	export function endsWith​(value:any, valor:String):boolean
	export function equals​(cs1:String, cs2:String):boolean
	export function equalsIgnoreCase​(cs1:String, cs2:String):boolean
	export function hasText​(value:any):boolean
	export function indexOf​(value:any, valor:String):Integer
	export function isEmpty​(value:any):boolean
	export function lpad​(str:String, size:Integer, fill:String):String
	export function startsWith​(value:any, valor:String):boolean
	export function temTexto​(value:any):boolean
}

export class TesteJSUtils {
}

export namespace TesteJSUtils.static {
	export function teste():void
}

export class UUIDJSUtils {
}

export namespace UUIDJSUtils.static {
	export function novoSimples():String
}

export class AbsOfertaEstoque {
	getAltura():BigDecimal
	getCodigoIntegracaoEstoqueItem():String
	getComprimento():BigDecimal
	getEstoqueItem():EstoqueItem
	getIdEstoqueItem():String
	getLargura():BigDecimal
	getMetragem():BigDecimal
	getNomeExibicao():String
	getPeso():BigDecimal
	getQuantidade():BigDecimal
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getValorUnitario():BigDecimal
	setAltura​(altura:BigDecimal):void
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setComprimento​(comprimento:BigDecimal):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setLargura​(largura:BigDecimal):void
	setMetragem​(metragem:BigDecimal):void
	setNomeExibicao​(nomeExibicao:String):void
	setPeso​(peso:BigDecimal):void
	setQuantidade​(quantidade:BigDecimal):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	toString():String
}

export namespace AbsOfertaEstoque.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Acabamento {
	getExibeLoja():Boolean
	getKeyText():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setExibeLoja​(exibeLoja:Boolean):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Acabamento.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Anexo {
	getAnexoInverso():Anexo
	getCodigoIntegracaoAnexoInverso():String
	getCodigoIntegracaoDominioAreaCliente():String
	getDominioAreaCliente():Dominio
	getEntidade():EntidadeIntegracao
	getExibeAreaCliente():Boolean
	getExtensao():AnexoContentType
	getIdAnexoInverso():String
	getIdDominioAreaCliente():String
	getIdEntidade():String
	getIdsAplicacoes():String
	getIdTipo():String
	getMd5Original():String
	getNome():String
	getNomeExibicaoAreaCliente():String
	getNomeOriginal():String
	getPublico():Boolean
	getSituacao():SituacaoCancelavel
	getTamanhoEmail():BigDecimal
	getTamanhoMin():BigDecimal
	getTamanhoOriginal():BigDecimal
	getTamanhoWeb():BigDecimal
	getTipo():AnexoTipo
	getUrlEmail():String
	getUrlMiniatura():String
	getUrlOriginal():String
	getUrlWeb():String
	setAnexoInverso​(anexoInverso:Anexo):void
	setCodigoIntegracaoAnexoInverso​(codigoIntegracaoAnexoInverso:String):void
	setCodigoIntegracaoDominioAreaCliente​(codigoIntegracaoDominioAreaCliente:String):void
	setDominioAreaCliente​(dominioAreaCliente:Dominio):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setExibeAreaCliente​(exibeAreaCliente:Boolean):void
	setExtensao​(extensao:AnexoContentType):void
	setIdAnexoInverso​(idAnexoInverso:String):void
	setIdDominioAreaCliente​(idDominioAreaCliente:String):void
	setIdEntidade​(idEntidade:String):void
	setIdsAplicacoes​(idsAplicacoes:String):void
	setIdTipo​(idTipo:String):void
	setMd5Original​(md5Original:String):void
	setNome​(nome:String):void
	setNomeExibicaoAreaCliente​(nomeExibicaoAreaCliente:String):void
	setNomeOriginal​(nomeOriginal:String):void
	setPublico​(publico:Boolean):void
	setSituacao​(situacao:SituacaoCancelavel):void
	setTamanhoEmail​(tamanhoEmail:BigDecimal):void
	setTamanhoMin​(tamanhoMin:BigDecimal):void
	setTamanhoOriginal​(tamanhoOriginal:BigDecimal):void
	setTamanhoWeb​(tamanhoWeb:BigDecimal):void
	setTipo​(tipo:AnexoTipo):void
	setUrlEmail​(urlEmail:String):void
	setUrlMiniatura​(urlMiniatura:String):void
	setUrlOriginal​(urlOriginal:String):void
	setUrlWeb​(urlWeb:String):void
	toString():String
}

export namespace Anexo.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export namespace AnexoDTO.static.TipoProcessamento {
	export interface AnexoDTO$TipoProcessamento {}

	export const BYTE_ARRAY: AnexoDTO$TipoProcessamento;
	export const MD5: AnexoDTO$TipoProcessamento;
	export const PATH: AnexoDTO$TipoProcessamento;
}

export namespace AnexoDTO {
export type TipoProcessamento = AnexoDTO.static.TipoProcessamento.AnexoDTO$TipoProcessamento;
}

export class AnexoDTO {
	getAnexoTipo():AnexoTipo
	getCodigoIntegracao():String
	getCodigoIntegracaoAnexoInverso():String
	getCodigoIntegracaoDominioAreaCliente():String
	getCodigoIntegracaoEntidade():String
	getExibeAreaCliente():Boolean
	getExtensao():AnexoContentType
	getExtraIntegrador():String
	getFile():JavaFile
	getIdAnexoInverso():String
	getIdEntidade():String
	getMarcarComoPrincipal():Boolean
	getMd5():String
	getNome():String
	getNomeExibicaoAreaCliente():String
	getNomeOriginal():String
	getPath():String
	getPermitirTamanhoInferior():Boolean
	getPublico():Boolean
	getTipoProcessamento():AnexoDTO.TipoProcessamento
	getUltimaModificacao():Long
	setAnexoTipo​(anexoTipo:AnexoTipo):void
	setCodigoIntegracao​(codigoIntegracao:String):void
	setCodigoIntegracaoAnexoInverso​(codigoIntegracaoAnexoInverso:String):void
	setCodigoIntegracaoDominioAreaCliente​(codigoIntegracaoDominioAreaCliente:String):void
	setCodigoIntegracaoEntidade​(codigoIntegracaoEntidade:String):void
	setExibeAreaCliente​(exibeAreaCliente:Boolean):void
	setExtensao​(extensao:AnexoContentType):void
	setFile​(file:JavaFile):void
	setIdAnexoInverso​(idAnexoInverso:String):void
	setIdEntidade​(idEntidade:String):void
	setMarcarComoPrincipal​(marcarComoPrincipal:Boolean):void
	setMd5​(md5:String):void
	setNome​(nome:String):void
	setNomeExibicaoAreaCliente​(nomeExibicaoAreaCliente:String):void
	setNomeOriginal​(nomeOriginal:String):void
	setPath​(path:String):void
	setPermitirTamanhoInferior​(permitirTamanhoInferior:Boolean):void
	setPublico​(publico:Boolean):void
	setTipoProcessamento​(tipoProcessamento:AnexoDTO.TipoProcessamento):void
	setUltimaModificacao​(ultimaModificacao:Long):void
	toString():String
}

export namespace AnexoExtraIntegrador.static.Tipo {
	export interface AnexoExtraIntegrador$Tipo {}

	export const BINARY: AnexoExtraIntegrador$Tipo;
	export const PATH: AnexoExtraIntegrador$Tipo;
}

export namespace AnexoExtraIntegrador {
export type Tipo = AnexoExtraIntegrador.static.Tipo.AnexoExtraIntegrador$Tipo;
}

export class AnexoExtraIntegrador {
	getDataUltimaModificacao():DateTime
	getMd5():String
	getPath():String
	setDataUltimaModificacao​(dataUltimaModificacao:DateTime):void
	setMd5​(md5:String):void
	setPath​(path:String):void
}

export class AnexoPath {
	getMd5():String
	getPath():String
	getUltimaModificacao():Long
	setMd5​(md5:String):void
	setPath​(path:String):void
	setUltimaModificacao​(ultimaModificacao:Long):void
	toString():String
}

export namespace AnexoPath.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class AtendimentoCliente {
	getCampanha():Campanha
	getCliente():Cliente
	getCodigoIntegracaoCampanha():String
	getContato():Contato
	getDataAgendamento():DateTime
	getDataLembrete():DateTime
	getEndereco():Endereco
	getIdCampanha():String
	getIdCliente():String
	getIdContato():String
	getIdEndereco():String
	getIdTipo():String
	getIdUsuario():String
	getNome():String
	getSituacao():SituacaoAtendimentoCliente
	getTipo():Dominio
	getUsuario():Usuario
	setCampanha​(campanha:Campanha):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setContato​(contato:Contato):void
	setDataAgendamento​(dataAgendamento:DateTime):void
	setDataLembrete​(dataLembrete:DateTime):void
	setEndereco​(endereco:Endereco):void
	setIdCampanha​(idCampanha:String):void
	setIdCliente​(idCliente:String):void
	setIdContato​(idContato:String):void
	setIdEndereco​(idEndereco:String):void
	setIdTipo​(idTipo:String):void
	setIdUsuario​(idUsuario:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoAtendimentoCliente):void
	setTipo​(tipo:Dominio):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace AtendimentoCliente.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CabecalhoVendaBase<S> {
	getCliente():Cliente
	getCondicaoPagamento():CondicaoPagamento
	getCustoTotal():BigDecimal
	getCustoTotalComFatores():BigDecimal
	getDataVencimento():DateTime
	getEndereco():Endereco
	getFatorTotalAplicado():BigDecimal
	getFormaPagamento():FormaPagamento
	getIdCliente():String
	getIdCondicaoPagamento():String
	getIdEndereco():String
	getIdFormaPagamento():String
	getIdMoeda():String
	getIdSituacaoUsuario():String
	getIdVendedor():String
	getMargemContribuicao():BigDecimal
	getMoeda():Moeda
	getPercentualMargemContribuicao():BigDecimal
	getPesoTotal():BigDecimal
	getQuantidadeItens():BigDecimal
	getSituacaoUsuario():Dominio
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getVendedor():Usuario
	setCliente​(cliente:Cliente):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setCustoTotal​(custoTotal:BigDecimal):void
	setCustoTotalComFatores​(custoTotalComFatores:BigDecimal):void
	setDataVencimento​(dataVencimento:DateTime):void
	setEndereco​(endereco:Endereco):void
	setFatorTotalAplicado​(fatorTotalAplicado:BigDecimal):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setIdCliente​(idCliente:String):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdEndereco​(idEndereco:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdVendedor​(idVendedor:String):void
	setMargemContribuicao​(margemContribuicao:BigDecimal):void
	setMoeda​(moeda:Moeda):void
	setPercentualMargemContribuicao​(percentualMargemContribuicao:BigDecimal):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export class Campanha {
	getCodigoIntegracaoTipoVenda():String
	getDataFim():DateTime
	getDataInicio():DateTime
	getIdTipoVenda():String
	getNome():String
	getSituacao():SituacaoCampanha
	getTipoVenda():TipoVenda
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setDataFim​(dataFim:DateTime):void
	setDataInicio​(dataInicio:DateTime):void
	setIdTipoVenda​(idTipoVenda:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoCampanha):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	toString():String
}

export namespace Campanha.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Categoria {
	getCategoriaPai():Categoria
	getCodigoIntegracaoCategoriaPai():String
	getConfiguracoesLoja():String
	getExibeLoja():Boolean
	getExtraLoja():String
	getIdCategoriaPai():String
	getNome():String
	getNomeAmigavel():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setCategoriaPai​(categoriaPai:Categoria):void
	setCodigoIntegracaoCategoriaPai​(codigoIntegracaoCategoriaPai:String):void
	setConfiguracoesLoja​(configuracoesLoja:String):void
	setExibeLoja​(exibeLoja:Boolean):void
	setExtraLoja​(extraLoja:String):void
	setIdCategoriaPai​(idCategoriaPai:String):void
	setNome​(nome:String):void
	setNomeAmigavel​(nomeAmigavel:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Categoria.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CategoriaHomeLoja {
	getOrdem():Integer
	getPublico():Boolean
	getSituacao():SituacaoGeneric
	getTipo():TipoCategoriaHomeLoja
	getTraducao():String
	setOrdem​(ordem:Integer):void
	setPublico​(publico:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipo​(tipo:TipoCategoriaHomeLoja):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace CategoriaHomeLoja.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CategoriaHomeLojaCategoria {
	getCategoria():Categoria
	getCategoriaHomeLoja():CategoriaHomeLoja
	getCodigoIntegracaoCategoria():String
	getCodigoIntegracaoCategoriaHomeLoja():String
	getIdCategoria():String
	getIdCategoriaHomeLoja():String
	getOrdem():Integer
	getSituacao():SituacaoGeneric
	setCategoria​(categoria:Categoria):void
	setCategoriaHomeLoja​(categoriaHomeLoja:CategoriaHomeLoja):void
	setCodigoIntegracaoCategoria​(codigoIntegracaoCategoria:String):void
	setCodigoIntegracaoCategoriaHomeLoja​(codigoIntegracaoCategoriaHomeLoja:String):void
	setIdCategoria​(idCategoria:String):void
	setIdCategoriaHomeLoja​(idCategoriaHomeLoja:String):void
	setOrdem​(ordem:Integer):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace CategoriaHomeLojaCategoria.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CategoriaHomeLojaEstoqueItem {
	getCategoriaHomeLoja():CategoriaHomeLoja
	getCodigoIntegracaoCategoriaHomeLoja():String
	getCodigoIntegracaoEstoqueItem():String
	getEstoqueItem():EstoqueItem
	getIdCategoriaHomeLoja():String
	getIdEstoqueItem():String
	getOrdem():Integer
	getSituacao():SituacaoGeneric
	setCategoriaHomeLoja​(categoriaHomeLoja:CategoriaHomeLoja):void
	setCodigoIntegracaoCategoriaHomeLoja​(codigoIntegracaoCategoriaHomeLoja:String):void
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setIdCategoriaHomeLoja​(idCategoriaHomeLoja:String):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setOrdem​(ordem:Integer):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace CategoriaHomeLojaEstoqueItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CategoriaProduto {
	getCategoria():Categoria
	getCodigoIntegracaoCategoria():String
	getCodigoIntegracaoProduto():String
	getIdCategoria():String
	getIdProduto():String
	getProduto():Produto
	getSituacao():SituacaoGeneric
	setCategoria​(categoria:Categoria):void
	setCodigoIntegracaoCategoria​(codigoIntegracaoCategoria:String):void
	setCodigoIntegracaoProduto​(codigoIntegracaoProduto:String):void
	setIdCategoria​(idCategoria:String):void
	setIdProduto​(idProduto:String):void
	setProduto​(produto:Produto):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace CategoriaProduto.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Classificacao {
	getExibeLoja():Boolean
	getKeyText():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setExibeLoja​(exibeLoja:Boolean):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Classificacao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Cliente {
	getAgrupadores():String
	getBannerEstoqueLoja():String
	getBannerHomeLoja():String
	getCodigoIntegracaoCondicaoPagamento():String
	getCodigoIntegracaoContatoPrincipal():String
	getCodigoIntegracaoEnderecoPrincipal():String
	getCodigoIntegracaoFormaPagamento():String
	getCodigoIntegracaoGrupoCliente():String
	getCodigoIntegracaoMoedaLimiteCredito():String
	getCodigoIntegracaoRepresentante():String
	getCodigoIntegracaoSituacaoUsuario():String
	getCodigoIntegracaoTabelaPreco():String
	getCodigoIntegracaoTipo():String
	getCodigoIntegracaoVendedor():String
	getCondicaoPagamento():CondicaoPagamento
	getContatoPrincipal():Contato
	getCreditoTemporarioUtilizado():BigDecimal
	getDataEfetivacao():DateTime
	getEnderecoPrincipal():Endereco
	getExtraLoja():String
	getFatorMargemContribuicao():BigDecimal
	getFormaPagamento():FormaPagamento
	getGrupoCliente():GrupoCliente
	getIdCondicaoPagamento():String
	getIdContatoPrincipal():String
	getIdEnderecoPrincipal():String
	getIdFormaPagamento():String
	getIdGrupoCliente():String
	getIdMoedaLimiteCredito():String
	getIdRepresentante():String
	getIdSituacaoUsuario():String
	getIdTabelaPreco():String
	getIdTipo():String
	getIdVendedor():String
	getLimiteCreditoAprovado():BigDecimal
	getLimiteCreditoDisponivel():BigDecimal
	getMoedaLimiteCredito():Moeda
	getNome():String
	getRepresentante():Representante
	getSituacao():SituacaoCliente
	getSituacaoUsuario():Dominio
	getTabelaPreco():TabelaPreco
	getTipo():TipoCliente
	getVendedor():Usuario
	setAgrupadores​(agrupadores:String):void
	setBannerEstoqueLoja​(bannerEstoqueLoja:String):void
	setBannerHomeLoja​(bannerHomeLoja:String):void
	setCodigoIntegracaoCondicaoPagamento​(codigoIntegracaoCondicaoPagamento:String):void
	setCodigoIntegracaoContatoPrincipal​(codigoIntegracaoContatoPrincipal:String):void
	setCodigoIntegracaoEnderecoPrincipal​(codigoIntegracaoEnderecoPrincipal:String):void
	setCodigoIntegracaoFormaPagamento​(codigoIntegracaoFormaPagamento:String):void
	setCodigoIntegracaoGrupoCliente​(codigoIntegracaoGrupoCliente:String):void
	setCodigoIntegracaoMoedaLimiteCredito​(codigoIntegracaoMoedaLimiteCredito:String):void
	setCodigoIntegracaoRepresentante​(codigoIntegracaoRepresentante:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setCodigoIntegracaoTabelaPreco​(codigoIntegracaoTabelaPreco:String):void
	setCodigoIntegracaoTipo​(codigoIntegracaoTipo:String):void
	setCodigoIntegracaoVendedor​(codigoIntegracaoVendedor:String):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setContatoPrincipal​(contatoPrincipal:Contato):void
	setCreditoTemporarioUtilizado​(creditoTemporarioUtilizado:BigDecimal):void
	setDataEfetivacao​(dataEfetivacao:DateTime):void
	setEnderecoPrincipal​(enderecoPrincipal:Endereco):void
	setExtraLoja​(extraLoja:String):void
	setFatorMargemContribuicao​(fatorMargemContribuicao:BigDecimal):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setGrupoCliente​(grupoCliente:GrupoCliente):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdContatoPrincipal​(idContatoPrincipal:String):void
	setIdEnderecoPrincipal​(idEnderecoPrincipal:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdGrupoCliente​(idGrupoCliente:String):void
	setIdMoedaLimiteCredito​(idMoedaLimiteCredito:String):void
	setIdRepresentante​(idRepresentante:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTabelaPreco​(idTabelaPreco:String):void
	setIdTipo​(idTipo:String):void
	setIdVendedor​(idVendedor:String):void
	setLimiteCreditoAprovado​(limiteCreditoAprovado:BigDecimal):void
	setLimiteCreditoDisponivel​(limiteCreditoDisponivel:BigDecimal):void
	setMoedaLimiteCredito​(moedaLimiteCredito:Moeda):void
	setNome​(nome:String):void
	setRepresentante​(representante:Representante):void
	setSituacao​(situacao:SituacaoCliente):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTabelaPreco​(tabelaPreco:TabelaPreco):void
	setTipo​(tipo:TipoCliente):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Cliente.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Comentario {
	getCliente():Cliente
	getEntidade():EntidadeIntegracao
	getIdCliente():String
	getIdEntidade():String
	getIdUsuarioCriacao():String
	getObservadores():String
	getSituacao():SituacaoGeneric
	getTexto():String
	getUsuarioCriacao():Usuario
	setCliente​(cliente:Cliente):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setIdCliente​(idCliente:String):void
	setIdEntidade​(idEntidade:String):void
	setIdUsuarioCriacao​(idUsuarioCriacao:String):void
	setObservadores​(observadores:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTexto​(texto:String):void
	setUsuarioCriacao​(usuarioCriacao:Usuario):void
	toString():String
}

export namespace Comentario.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CondicaoPagamento {
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace CondicaoPagamento.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class ContaEnvio {
	equals​(o:any):boolean
	getAccesskey():String
	getFromEmail():String
	getFromName():String
	getReplyTo():String
	getSecretkey():String
	hashCode():Integer
	setAccesskey​(accesskey:String):void
	setFromEmail​(fromEmail:String):void
	setFromName​(fromName:String):void
	setReplyTo​(replyTo:String):void
	setSecretkey​(secretkey:String):void
	toString():String
}

export class Contato {
	getCodigoIntegracaoEntidade():String
	getDataBloqueio():DateTime
	getDataNascimento():DateTime
	getDataValidadeBloqueio():DateTime
	getDescricaoBloqueio():String
	getEmail():String
	getFavorito():Boolean
	getIdEntidade():String
	getNome():String
	getNomeEnvio():String
	getPrefixo():String
	getSituacao():SituacaoGeneric
	getSituacaoBloqueio():SituacaoBloqueioContato
	getSubtipoBloqueio():String
	getTelefone():String
	getTipo():ContatoTipo
	getTipoBloqueio():String
	setCodigoIntegracaoEntidade​(codigoIntegracaoEntidade:String):void
	setDataBloqueio​(dataBloqueio:DateTime):void
	setDataNascimento​(dataNascimento:DateTime):void
	setDataValidadeBloqueio​(dataValidadeBloqueio:DateTime):void
	setDescricaoBloqueio​(descricaoBloqueio:String):void
	setEmail​(email:String):void
	setFavorito​(favorito:Boolean):void
	setIdEntidade​(idEntidade:String):void
	setNome​(nome:String):void
	setNomeEnvio​(nomeEnvio:String):void
	setPrefixo​(prefixo:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setSituacaoBloqueio​(situacaoBloqueio:SituacaoBloqueioContato):void
	setSubtipoBloqueio​(subtipoBloqueio:String):void
	setTelefone​(telefone:String):void
	setTipo​(tipo:ContatoTipo):void
	setTipoBloqueio​(tipoBloqueio:String):void
	toString():String
}

export namespace Contato.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export type ContatoTipo = ContatoTipo.static.ContatoTipo;
export namespace ContatoTipo.static {
	export interface ContatoTipo {}

	export const CLIENTE: ContatoTipo;
}

export class Cor {
	getExibeLoja():Boolean
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setExibeLoja​(exibeLoja:Boolean):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Cor.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CotacaoMoeda {
	getCodigoIntegracaoMoedaDestino():String
	getCodigoIntegracaoMoedaOrigem():String
	getDataCotacao():DateTime
	getFatorMultiplicacao():BigDecimal
	getIdMoedaDestino():String
	getIdMoedaOrigem():String
	getMoedaDestino():Moeda
	getMoedaOrigem():Moeda
	setCodigoIntegracaoMoedaDestino​(codigoIntegracaoMoedaDestino:String):void
	setCodigoIntegracaoMoedaOrigem​(codigoIntegracaoMoedaOrigem:String):void
	setDataCotacao​(dataCotacao:DateTime):void
	setFatorMultiplicacao​(fatorMultiplicacao:BigDecimal):void
	setIdMoedaDestino​(idMoedaDestino:String):void
	setIdMoedaOrigem​(idMoedaOrigem:String):void
	setMoedaDestino​(moedaDestino:Moeda):void
	setMoedaOrigem​(moedaOrigem:Moeda):void
	toString():String
}

export namespace CotacaoMoeda.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CreditoCliente {
	getCliente():Cliente
	getIdCliente():String
	getIdMoeda():String
	getIdPedido():String
	getIdTipo():String
	getIdVendedor():String
	getMoeda():Moeda
	getObservacao():String
	getPedido():Pedido
	getSituacao():SituacaoCreditoCliente
	getTipo():Dominio
	getValor():BigDecimal
	getValorUtilizado():BigDecimal
	getVendedor():Usuario
	setCliente​(cliente:Cliente):void
	setIdCliente​(idCliente:String):void
	setIdMoeda​(idMoeda:String):void
	setIdPedido​(idPedido:String):void
	setIdTipo​(idTipo:String):void
	setIdVendedor​(idVendedor:String):void
	setMoeda​(moeda:Moeda):void
	setObservacao​(observacao:String):void
	setPedido​(pedido:Pedido):void
	setSituacao​(situacao:SituacaoCreditoCliente):void
	setTipo​(tipo:Dominio):void
	setValor​(valor:BigDecimal):void
	setValorUtilizado​(valorUtilizado:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace CreditoCliente.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CustomForm {
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoTipoCustomForm():String
	getCodigoIntegracaoUsuario():String
	getDados():String
	getDataCancelamento():DateTime
	getDescricao():String
	getIdMotivoCancelamento():String
	getIdSituacaoUsuario():String
	getIdTipoCustomForm():String
	getIdUsuario():String
	getItens():ArrayList<CustomFormItem>
	getMotivoCancelamento():MotivoCancelamento
	getObservacaoCancelamento():String
	getSituacao():SituacaoCustomForm
	getTipoCustomForm():TipoCustomForm
	getUsuario():Usuario
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoTipoCustomForm​(codigoIntegracaoTipoCustomForm:String):void
	setCodigoIntegracaoUsuario​(codigoIntegracaoUsuario:String):void
	setDados​(dados:String):void
	setDataCancelamento​(dataCancelamento:DateTime):void
	setDescricao​(descricao:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoCustomForm​(idTipoCustomForm:String):void
	setIdUsuario​(idUsuario:String):void
	setItens​(itens:ArrayList<CustomFormItem>):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setSituacao​(situacao:SituacaoCustomForm):void
	setTipoCustomForm​(tipoCustomForm:TipoCustomForm):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace CustomForm.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class CustomFormItem {
	getArea():String
	getCodigoIntegracaoCustomForm():String
	getCodigoIntegracaoCustomFormItemAgrupamento():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoTipoCustomForm():String
	getCustomForm():CustomForm
	getCustomFormItemAgrupamento():CustomFormItem
	getEntidade():EntidadeIntegracao
	getIdCustomForm():String
	getIdCustomFormItemAgrupamento():String
	getIdEntidade():String
	getIdMotivoCancelamento():String
	getIdSituacaoUsuario():String
	getIdTipoCustomForm():String
	getMotivoCancelamento():MotivoCancelamento
	getObservacaoCancelamento():String
	getPossuiAgrupador():Boolean
	getSituacao():SituacaoGeneric
	getTipoCustomForm():TipoCustomForm
	getValor():String
	setArea​(area:String):void
	setCodigoIntegracaoCustomForm​(codigoIntegracaoCustomForm:String):void
	setCodigoIntegracaoCustomFormItemAgrupamento​(codigoIntegracaoCustomFormItemAgrupamento:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoTipoCustomForm​(codigoIntegracaoTipoCustomForm:String):void
	setCustomForm​(customForm:CustomForm):void
	setCustomFormItemAgrupamento​(customFormItemAgrupamento:CustomFormItem):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setIdCustomForm​(idCustomForm:String):void
	setIdCustomFormItemAgrupamento​(idCustomFormItemAgrupamento:String):void
	setIdEntidade​(idEntidade:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoCustomForm​(idTipoCustomForm:String):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setPossuiAgrupador​(possuiAgrupador:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoCustomForm​(tipoCustomForm:TipoCustomForm):void
	setValor​(valor:String):void
	toString():String
}

export namespace CustomFormItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Deposito {
	getExibeLoja():Boolean
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	getVirtual():Boolean
	setExibeLoja​(exibeLoja:Boolean):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	setVirtual​(virtual:Boolean):void
	toString():String
}

export namespace Deposito.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export namespace DisponibilidadeDTO.static.Motivo {
	export interface DisponibilidadeDTO$Motivo {}

	export const DISPONIVEL: DisponibilidadeDTO$Motivo;
	export const ENVIO: DisponibilidadeDTO$Motivo;
	export const ENVIO_PENDENTE: DisponibilidadeDTO$Motivo;
	export const INTEGRACAO: DisponibilidadeDTO$Motivo;
	export const PRIMEIRA_CARGA: DisponibilidadeDTO$Motivo;
}

export namespace DisponibilidadeDTO {
export type Motivo = DisponibilidadeDTO.static.Motivo.DisponibilidadeDTO$Motivo;
}

export class DisponibilidadeDTO {
	getHash():String
	getMotivo():DisponibilidadeDTO.Motivo
	setHash​(hash:String):void
	setMotivo​(motivo:DisponibilidadeDTO.Motivo):void
}

export namespace DisponibilidadeDTO.static {
	export function indisponivel​(motivo:DisponibilidadeDTO.Motivo):DisponibilidadeDTO
	export function ok​(hash:String):DisponibilidadeDTO
}

export class Dominio {
	getNome():String
	getSituacao():SituacaoGeneric
	getTipo():EntidadeIntegracao
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipo​(tipo:EntidadeIntegracao):void
	toString():String
}

export namespace Dominio.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Empresa {
	getAccesskeyContaEnvio():String
	getAnexoEstoqueSemImagem():Anexo
	getAnexoImagemFundoConferencia():Anexo
	getAnexoLogoAreaClienteCompleta():Anexo
	getAnexoLogoAreaClienteFigura():Anexo
	getAnexoLogoAreaClienteSemImagem():Anexo
	getBannerFooterLoja():String
	getContaEnvio():ContaEnvio
	getFatorAreaImperial():BigDecimal
	getFatorAreaMetrico():BigDecimal
	getFatorDimensaoImperial():BigDecimal
	getFatorDimensaoMetrico():BigDecimal
	getFatorVolumeImperial():BigDecimal
	getFatorVolumeMetrico():BigDecimal
	getFromEmailContaEnvio():String
	getFromNameContaEnvio():String
	getIdAnexoEstoqueSemImagem():String
	getIdAnexoImagemFundoConferencia():String
	getIdAnexoLogoAreaClienteCompleta():String
	getIdAnexoLogoAreaClienteFigura():String
	getIdAnexoLogoAreaClienteSemImagem():String
	getNome():String
	getNomeAmigavel():String
	getQuantidadeCasasDecimalAreaImperial():Integer
	getQuantidadeCasasDecimalAreaMetrico():Integer
	getQuantidadeCasasDecimalDimensaoImperial():Integer
	getQuantidadeCasasDecimalDimensaoMetrico():Integer
	getQuantidadeCasasDecimalValorImperial():Integer
	getQuantidadeCasasDecimalValorMetrico():Integer
	getQuantidadeCasasDecimalVolumeImperial():Integer
	getQuantidadeCasasDecimalVolumeMetrico():Integer
	getSecretkeyContaEnvio():String
	getSituacao():SituacaoGeneric
	setAccesskeyContaEnvio​(accesskeyContaEnvio:String):void
	setAnexoEstoqueSemImagem​(anexoEstoqueSemImagem:Anexo):void
	setAnexoImagemFundoConferencia​(anexoImagemFundoConferencia:Anexo):void
	setAnexoLogoAreaClienteCompleta​(anexoLogoAreaClienteCompleta:Anexo):void
	setAnexoLogoAreaClienteFigura​(anexoLogoAreaClienteFigura:Anexo):void
	setAnexoLogoAreaClienteSemImagem​(anexoLogoAreaClienteSemImagem:Anexo):void
	setBannerFooterLoja​(bannerFooterLoja:String):void
	setContaEnvio​(contaEnvio:ContaEnvio):void
	setFatorAreaImperial​(fatorAreaImperial:BigDecimal):void
	setFatorAreaMetrico​(fatorAreaMetrico:BigDecimal):void
	setFatorDimensaoImperial​(fatorDimensaoImperial:BigDecimal):void
	setFatorDimensaoMetrico​(fatorDimensaoMetrico:BigDecimal):void
	setFatorVolumeImperial​(fatorVolumeImperial:BigDecimal):void
	setFatorVolumeMetrico​(fatorVolumeMetrico:BigDecimal):void
	setFromEmailContaEnvio​(fromEmailContaEnvio:String):void
	setFromNameContaEnvio​(fromNameContaEnvio:String):void
	setIdAnexoEstoqueSemImagem​(idAnexoEstoqueSemImagem:String):void
	setIdAnexoImagemFundoConferencia​(idAnexoImagemFundoConferencia:String):void
	setIdAnexoLogoAreaClienteCompleta​(idAnexoLogoAreaClienteCompleta:String):void
	setIdAnexoLogoAreaClienteFigura​(idAnexoLogoAreaClienteFigura:String):void
	setIdAnexoLogoAreaClienteSemImagem​(idAnexoLogoAreaClienteSemImagem:String):void
	setNome​(nome:String):void
	setNomeAmigavel​(nomeAmigavel:String):void
	setQuantidadeCasasDecimalAreaImperial​(quantidadeCasasDecimalAreaImperial:Integer):void
	setQuantidadeCasasDecimalAreaMetrico​(quantidadeCasasDecimalAreaMetrico:Integer):void
	setQuantidadeCasasDecimalDimensaoImperial​(quantidadeCasasDecimalDimensaoImperial:Integer):void
	setQuantidadeCasasDecimalDimensaoMetrico​(quantidadeCasasDecimalDimensaoMetrico:Integer):void
	setQuantidadeCasasDecimalValorImperial​(quantidadeCasasDecimalValorImperial:Integer):void
	setQuantidadeCasasDecimalValorMetrico​(quantidadeCasasDecimalValorMetrico:Integer):void
	setQuantidadeCasasDecimalVolumeImperial​(quantidadeCasasDecimalVolumeImperial:Integer):void
	setQuantidadeCasasDecimalVolumeMetrico​(quantidadeCasasDecimalVolumeMetrico:Integer):void
	setSecretkeyContaEnvio​(secretkeyContaEnvio:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace Empresa.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Endereco {
	getCidade():String
	getCliente():Cliente
	getCodigoIntegracaoEntidade():String
	getCodigoIntegracaoPais():String
	getCodigoPostal():String
	getEstado():String
	getIdEntidade():String
	getIdPais():String
	getLatitude():BigDecimal
	getLimitePeso():BigDecimal
	getLinha1():String
	getLinha2():String
	getLongitude():BigDecimal
	getNome():String
	getNomePais():String
	getPais():Pais
	getSituacao():SituacaoGeneric
	getTipo():EnderecoTipo
	getTipoString():String
	setCidade​(cidade:String):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoEntidade​(codigoIntegracaoEntidade:String):void
	setCodigoIntegracaoPais​(codigoIntegracaoPais:String):void
	setCodigoPostal​(codigoPostal:String):void
	setEstado​(estado:String):void
	setIdEntidade​(idEntidade:String):void
	setIdPais​(idPais:String):void
	setLatitude​(latitude:BigDecimal):void
	setLimitePeso​(limitePeso:BigDecimal):void
	setLinha1​(linha1:String):void
	setLinha2​(linha2:String):void
	setLongitude​(longitude:BigDecimal):void
	setNome​(nome:String):void
	setNomePais​(nomePais:String):void
	setPais​(pais:Pais):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipo​(tipo:EnderecoTipo):void
	setTipoString​(tipoString:String):void
	toString():String
}

export namespace Endereco.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class EntidadeCarga {
	getDataUltimaCarga():DateTime
	getEntidade():EntidadeIntegracao
	getPendenteCarga():Boolean
	setDataUltimaCarga​(dataUltimaCarga:DateTime):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setPendenteCarga​(pendenteCarga:Boolean):void
	toString():String
}

export namespace EntidadeCarga.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Espessura {
	getExibeLoja():Boolean
	getKeyText():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setExibeLoja​(exibeLoja:Boolean):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Espessura.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class EstoqueItem {
	getAlturaBruta():BigDecimal
	getAlturaLiquida():BigDecimal
	getClienteFaturadoIntegracao():Cliente
	getClienteVenda():Cliente
	getCodigoEstoqueItemAgrupamento():String
	getCodigoEstoqueItemOrigem():String
	getCodigoIntegracaoAcabamento():String
	getCodigoIntegracaoClassificacao():String
	getCodigoIntegracaoClienteFaturadoIntegracao():String
	getCodigoIntegracaoDeposito():String
	getCodigoIntegracaoEspessura():String
	getCodigoIntegracaoEstoqueItemAgrupamento():String
	getCodigoIntegracaoEstoqueItemOrigem():String
	getCodigoIntegracaoMaterial():String
	getCodigoIntegracaoMoedaValorTotalCusto():String
	getCodigoIntegracaoProduto():String
	getCodigoIntegracaoTipoEstoqueItem():String
	getCodigoIntegracaoVendedorFaturadoIntegracao():String
	getComprimentoBruto():BigDecimal
	getComprimentoLiquido():BigDecimal
	getDataEntradaEstoque():DateTime
	getDefinidaQuantidadeEstoqueViaReserva():Boolean
	getDeposito():Deposito
	getDescricaoSubitens():String
	getEstoqueItemAgrupamento():EstoqueItem
	getEstoqueItemOrigem():EstoqueItem
	getEtiqueta():String
	getExtraLoja():String
	getIdClienteFaturadoIntegracao():String
	getIdClienteVenda():String
	getIdDeposito():String
	getIdEstoqueItemAgrupamento():String
	getIdEstoqueItemOrigem():String
	getIdMoedaValorTotalCusto():String
	getIdProduto():String
	getIdTipoEstoqueItem():String
	getIdVendedorFaturadoIntegracao():String
	getIdVendedorVenda():String
	getLarguraBruta():BigDecimal
	getLarguraLiquida():BigDecimal
	getLocalizacao():String
	getMetragemBruta():BigDecimal
	getMetragemLiquida():BigDecimal
	getModificadoEmItemNaoRecebidoDoClient():Boolean
	getMoedaValorTotalCusto():Moeda
	getNomeClienteFaturadoIntegracao():String
	getNomeVendedorFaturadoIntegracao():String
	getNomeVendedorVenda():String
	getObservacao():String
	getPesoBruto():BigDecimal
	getPesoLiquido():BigDecimal
	getPesoUnitarioBruto():BigDecimal
	getPrecoCusto():BigDecimal
	getPrecoVenda():BigDecimal
	getProduto():Produto
	getQuantidadeConsignada():BigDecimal
	getQuantidadeDisponivel():BigDecimal
	getQuantidadeEmReserva():BigDecimal
	getQuantidadeFaturada():BigDecimal
	getQuantidadeFaturadaNaoContabilizada():BigDecimal
	getQuantidadeItens():BigDecimal
	getSituacao():String
	getTipoEstoqueItem():TipoEstoqueItem
	getValorPromocional():BigDecimal
	getValorTotalCusto():BigDecimal
	getVendedorFaturadoIntegracao():Usuario
	getVendedorVenda():Usuario
	setAlturaBruta​(alturaBruta:BigDecimal):void
	setAlturaLiquida​(alturaLiquida:BigDecimal):void
	setClienteFaturadoIntegracao​(clienteFaturadoIntegracao:Cliente):void
	setClienteVenda​(clienteVenda:Cliente):void
	setCodigoEstoqueItemAgrupamento​(codigoEstoqueItemAgrupamento:String):void
	setCodigoEstoqueItemOrigem​(codigoEstoqueItemOrigem:String):void
	setCodigoIntegracaoAcabamento​(codigoIntegracaoAcabamento:String):void
	setCodigoIntegracaoClassificacao​(codigoIntegracaoClassificacao:String):void
	setCodigoIntegracaoClienteFaturadoIntegracao​(codigoIntegracaoClienteFaturadoIntegracao:String):void
	setCodigoIntegracaoDeposito​(codigoIntegracaoDeposito:String):void
	setCodigoIntegracaoEspessura​(codigoIntegracaoEspessura:String):void
	setCodigoIntegracaoEstoqueItemAgrupamento​(codigoIntegracaoEstoqueItemAgrupamento:String):void
	setCodigoIntegracaoEstoqueItemOrigem​(codigoIntegracaoEstoqueItemOrigem:String):void
	setCodigoIntegracaoMaterial​(codigoIntegracaoMaterial:String):void
	setCodigoIntegracaoMoedaValorTotalCusto​(codigoIntegracaoMoedaValorTotalCusto:String):void
	setCodigoIntegracaoProduto​(codigoIntegracaoProduto:String):void
	setCodigoIntegracaoTipoEstoqueItem​(codigoIntegracaoTipoEstoqueItem:String):void
	setCodigoIntegracaoVendedorFaturadoIntegracao​(codigoIntegracaoVendedorFaturadoIntegracao:String):void
	setComprimentoBruto​(comprimentoBruto:BigDecimal):void
	setComprimentoLiquido​(comprimentoLiquido:BigDecimal):void
	setDataEntradaEstoque​(dataEntradaEstoque:DateTime):void
	setDefinidaQuantidadeEstoqueViaReserva​(definidaQuantidadeEstoqueViaReserva:Boolean):void
	setDeposito​(deposito:Deposito):void
	setDescricaoSubitens​(descricaoSubitens:String):void
	setEstoqueItemAgrupamento​(estoqueItemAgrupamento:EstoqueItem):void
	setEstoqueItemOrigem​(estoqueItemOrigem:EstoqueItem):void
	setEtiqueta​(etiqueta:String):void
	setExtraLoja​(extraLoja:String):void
	setIdClienteFaturadoIntegracao​(idClienteFaturadoIntegracao:String):void
	setIdClienteVenda​(idClienteVenda:String):void
	setIdDeposito​(idDeposito:String):void
	setIdEstoqueItemAgrupamento​(idEstoqueItemAgrupamento:String):void
	setIdEstoqueItemOrigem​(idEstoqueItemOrigem:String):void
	setIdMoedaValorTotalCusto​(idMoedaValorTotalCusto:String):void
	setIdProduto​(idProduto:String):void
	setIdTipoEstoqueItem​(idTipoEstoqueItem:String):void
	setIdVendedorFaturadoIntegracao​(idVendedorFaturadoIntegracao:String):void
	setIdVendedorVenda​(idVendedorVenda:String):void
	setLarguraBruta​(larguraBruta:BigDecimal):void
	setLarguraLiquida​(larguraLiquida:BigDecimal):void
	setLocalizacao​(localizacao:String):void
	setMetragemBruta​(metragemBruta:BigDecimal):void
	setMetragemLiquida​(metragemLiquida:BigDecimal):void
	setModificadoEmItemNaoRecebidoDoClient​(modificadoEmItemNaoRecebidoDoClient:Boolean):void
	setMoedaValorTotalCusto​(moedaValorTotalCusto:Moeda):void
	setNomeClienteFaturadoIntegracao​(nomeClienteFaturadoIntegracao:String):void
	setNomeVendedorFaturadoIntegracao​(nomeVendedorFaturadoIntegracao:String):void
	setNomeVendedorVenda​(nomeVendedorVenda:String):void
	setObservacao​(observacao:String):void
	setPesoBruto​(pesoBruto:BigDecimal):void
	setPesoLiquido​(pesoLiquido:BigDecimal):void
	setPesoUnitarioBruto​(pesoUnitarioBruto:BigDecimal):void
	setPrecoCusto​(precoCusto:BigDecimal):void
	setPrecoVenda​(precoVenda:BigDecimal):void
	setProduto​(produto:Produto):void
	setQuantidadeConsignada​(quantidadeConsignada:BigDecimal):void
	setQuantidadeDisponivel​(quantidadeDisponivel:BigDecimal):void
	setQuantidadeEmReserva​(quantidadeEmReserva:BigDecimal):void
	setQuantidadeFaturada​(quantidadeFaturada:BigDecimal):void
	setQuantidadeFaturadaNaoContabilizada​(quantidadeFaturadaNaoContabilizada:BigDecimal):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setSituacao​(situacao:String):void
	setTipoEstoqueItem​(tipoEstoqueItem:TipoEstoqueItem):void
	setValorPromocional​(valorPromocional:BigDecimal):void
	setValorTotalCusto​(valorTotalCusto:BigDecimal):void
	setVendedorFaturadoIntegracao​(vendedorFaturadoIntegracao:Usuario):void
	setVendedorVenda​(vendedorVenda:Usuario):void
	toString():String
}

export namespace EstoqueItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export interface ExtraIntegradorInterface {
	getExtraIntegrador():String
	setExtraIntegrador​(extraIntegrador:String):void
}

export class FaseTarefa {
	getIdTipoTarefa():String
	getNome():String
	getOrdem():Integer
	getSituacao():SituacaoGeneric
	getTipoTarefa():TipoTarefa
	setIdTipoTarefa​(idTipoTarefa:String):void
	setNome​(nome:String):void
	setOrdem​(ordem:Integer):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoTarefa​(tipoTarefa:TipoTarefa):void
	toString():String
}

export namespace FaseTarefa.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Faturamento {
	getCampanha():Campanha
	getCliente():Cliente
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoCondicaoPagamento():String
	getCodigoIntegracaoEndereco():String
	getCodigoIntegracaoFormaPagamento():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoOportunidade():String
	getCodigoIntegracaoPlanejamento():String
	getCodigoIntegracaoRepresentante():String
	getCodigoIntegracaoSituacaoUsuario():String
	getCodigoIntegracaoTipoFrete():String
	getCodigoIntegracaoTipoVenda():String
	getCodigoOrdemCompra():String
	getCondicaoPagamento():CondicaoPagamento
	getContabilizaFaturamentoItens():Boolean
	getCustoTotal():BigDecimal
	getCustoTotalComFatores():BigDecimal
	getData():DateTime
	getDataCancelamento():DateTime
	getDataLimiteMissionControl():DateTime
	getEndereco():Endereco
	getFatoresConversao():String
	getFatorTotalAplicado():BigDecimal
	getFormaPagamento():FormaPagamento
	getIdCampanha():String
	getIdCliente():String
	getIdCondicaoPagamento():String
	getIdEndereco():String
	getIdFormaPagamento():String
	getIdMoeda():String
	getIdMotivoCancelamento():String
	getIdOportunidade():String
	getIdPedido():String
	getIdPlanejamento():String
	getIdRepresentante():String
	getIdSituacaoUsuario():String
	getIdTipoFrete():String
	getIdTipoVenda():String
	getIdVendedor():String
	getItens():ArrayList<FaturamentoItem>
	getMarcarQuantidadeEstoqueItem():Boolean
	getMargemContribuicao():BigDecimal
	getMoeda():Moeda
	getMotivoCancelamento():MotivoCancelamento
	getNome():String
	getNomeCliente():String
	getObservacao():String
	getObservacaoCancelamento():String
	getOportunidade():Oportunidade
	getPedido():Pedido
	getPercentualMargemContribuicao():BigDecimal
	getPesoTotal():BigDecimal
	getPlanejamento():Planejamento
	getQuantidadeItens():BigDecimal
	getRepresentante():Representante
	getSituacao():SituacaoFaturamento
	getSituacaoUsuario():Dominio
	getTipoFrete():TipoFrete
	getTipoVenda():TipoVenda
	getTotalizadores():String
	getTotalizadoresMissionControl():String
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getVendedor():Usuario
	setCampanha​(campanha:Campanha):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoCondicaoPagamento​(codigoIntegracaoCondicaoPagamento:String):void
	setCodigoIntegracaoEndereco​(codigoIntegracaoEndereco:String):void
	setCodigoIntegracaoFormaPagamento​(codigoIntegracaoFormaPagamento:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoOportunidade​(codigoIntegracaoOportunidade:String):void
	setCodigoIntegracaoPlanejamento​(codigoIntegracaoPlanejamento:String):void
	setCodigoIntegracaoRepresentante​(codigoIntegracaoRepresentante:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setCodigoIntegracaoTipoFrete​(codigoIntegracaoTipoFrete:String):void
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setCodigoOrdemCompra​(codigoOrdemCompra:String):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setContabilizaFaturamentoItens​(contabilizaFaturamentoItens:Boolean):void
	setCustoTotal​(custoTotal:BigDecimal):void
	setCustoTotalComFatores​(custoTotalComFatores:BigDecimal):void
	setData​(data:DateTime):void
	setDataCancelamento​(dataCancelamento:DateTime):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setEndereco​(endereco:Endereco):void
	setFatoresConversao​(fatoresConversao:String):void
	setFatorTotalAplicado​(fatorTotalAplicado:BigDecimal):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setIdCampanha​(idCampanha:String):void
	setIdCliente​(idCliente:String):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdEndereco​(idEndereco:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdOportunidade​(idOportunidade:String):void
	setIdPedido​(idPedido:String):void
	setIdPlanejamento​(idPlanejamento:String):void
	setIdRepresentante​(idRepresentante:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoFrete​(idTipoFrete:String):void
	setIdTipoVenda​(idTipoVenda:String):void
	setIdVendedor​(idVendedor:String):void
	setItens​(itens:ArrayList<FaturamentoItem>):void
	setMarcarQuantidadeEstoqueItem​(marcarQuantidadeEstoqueItem:Boolean):void
	setMargemContribuicao​(margemContribuicao:BigDecimal):void
	setMoeda​(moeda:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setNome​(nome:String):void
	setNomeCliente​(nomeCliente:String):void
	setObservacao​(observacao:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setOportunidade​(oportunidade:Oportunidade):void
	setPedido​(pedido:Pedido):void
	setPercentualMargemContribuicao​(percentualMargemContribuicao:BigDecimal):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setPlanejamento​(planejamento:Planejamento):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setRepresentante​(representante:Representante):void
	setSituacao​(situacao:SituacaoFaturamento):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipoFrete​(tipoFrete:TipoFrete):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	setTotalizadores​(totalizadores:String):void
	setTotalizadoresMissionControl​(totalizadoresMissionControl:String):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Faturamento.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class FaturamentoItem {
	getAltura():BigDecimal
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoFaturamento():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMoedaConversao():String
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoPedidoItem():String
	getCodigoIntegracaoReservaItem():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getComprimento():BigDecimal
	getContabiliza():Boolean
	getCustoTotal():BigDecimal
	getCustoTotalComFatores():BigDecimal
	getEstoqueItem():EstoqueItem
	getFatorTotalAplicado():BigDecimal
	getFaturamento():Faturamento
	getIdEstoqueItem():String
	getIdFaturamento():String
	getIdMoeda():String
	getIdMoedaConversao():String
	getIdMoedaOriginal():String
	getIdMotivoCancelamento():String
	getIdPedidoItem():String
	getIdReservaItem():String
	getIdTabelaPrecoItem():String
	getLargura():BigDecimal
	getMarcarQuantidadeEstoqueItem():Boolean
	getMargemContribuicao():BigDecimal
	getMetragem():BigDecimal
	getMoeda():Moeda
	getMoedaConversao():Moeda
	getMoedaOriginal():Moeda
	getMotivoCancelamento():Dominio
	getNomeExibicao():String
	getParecerCancelamento():String
	getPedidoItem():PedidoItem
	getPercentualMargemContribuicao():BigDecimal
	getPeso():BigDecimal
	getQuantidade():BigDecimal
	getReservaItem():ReservaItem
	getSituacao():SituacaoFaturamentoItem
	getTabelaPrecoItem():TabelaPrecoItem
	getValorImpostoDestacado():BigDecimal
	getValorImpostoDestacadoConvertido():BigDecimal
	getValorTotal():BigDecimal
	getValorTotalConvertido():BigDecimal
	getValorUnitario():BigDecimal
	getValorUnitarioConvertido():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setAltura​(altura:BigDecimal):void
	setarValoresPadraoComoConvertidosSeNaoInformado():void
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoFaturamento​(codigoIntegracaoFaturamento:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMoedaConversao​(codigoIntegracaoMoedaConversao:String):void
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoPedidoItem​(codigoIntegracaoPedidoItem:String):void
	setCodigoIntegracaoReservaItem​(codigoIntegracaoReservaItem:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setComprimento​(comprimento:BigDecimal):void
	setContabiliza​(contabiliza:Boolean):void
	setCustoTotal​(custoTotal:BigDecimal):void
	setCustoTotalComFatores​(custoTotalComFatores:BigDecimal):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setFatorTotalAplicado​(fatorTotalAplicado:BigDecimal):void
	setFaturamento​(faturamento:Faturamento):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdFaturamento​(idFaturamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMoedaConversao​(idMoedaConversao:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdPedidoItem​(idPedidoItem:String):void
	setIdReservaItem​(idReservaItem:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setLargura​(largura:BigDecimal):void
	setMarcarQuantidadeEstoqueItem​(marcarQuantidadeEstoqueItem:Boolean):void
	setMargemContribuicao​(margemContribuicao:BigDecimal):void
	setMetragem​(metragem:BigDecimal):void
	setMoeda​(moeda:Moeda):void
	setMoedaConversao​(moedaConversao:Moeda):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:Dominio):void
	setNomeExibicao​(nomeExibicao:String):void
	setParecerCancelamento​(parecerCancelamento:String):void
	setPedidoItem​(pedidoItem:PedidoItem):void
	setPercentualMargemContribuicao​(percentualMargemContribuicao:BigDecimal):void
	setPeso​(peso:BigDecimal):void
	setQuantidade​(quantidade:BigDecimal):void
	setReservaItem​(reservaItem:ReservaItem):void
	setSituacao​(situacao:SituacaoFaturamentoItem):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorImpostoDestacadoConvertido​(valorImpostoDestacadoConvertido:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setValorTotalConvertido​(valorTotalConvertido:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	setValorUnitarioConvertido​(valorUnitarioConvertido:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace FaturamentoItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class FormaPagamento {
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace FormaPagamento.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Fornecedor {
	getCodigoIntegracaoEnderecoPrincipal():String
	getCodigoIntegracaoTipo():String
	getEnderecoPrincipal():Endereco
	getIdEnderecoPrincipal():String
	getIdTipo():String
	getNome():String
	getSituacao():SituacaoCliente
	getTipo():Dominio
	setCodigoIntegracaoEnderecoPrincipal​(codigoIntegracaoEnderecoPrincipal:String):void
	setCodigoIntegracaoTipo​(codigoIntegracaoTipo:String):void
	setEnderecoPrincipal​(enderecoPrincipal:Endereco):void
	setIdEnderecoPrincipal​(idEnderecoPrincipal:String):void
	setIdTipo​(idTipo:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoCliente):void
	setTipo​(tipo:Dominio):void
	toString():String
}

export namespace Fornecedor.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GenericModel {
	getDataInclusao():DateTime
	getDataUltimaAtualizacao():DateTime
	getIdRequisicaoAlteracao():String
	getIdUsuarioAlteracao():String
	setDataInclusao​(dataInclusao:DateTime):void
	setDataUltimaAtualizacao​(dataUltimaAtualizacao:DateTime):void
	setIdRequisicaoAlteracao​(idRequisicaoAlteracao:String):void
	setIdUsuarioAlteracao​(idUsuarioAlteracao:String):void
	toString():String
}

export namespace GenericModel.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GenericModelEmpresa {
	getAnexoPadrao():Anexo
	getCodigo():String
	getCodigoIntegracao():String
	getDescricaoErro():String
	getDescricaoErroIntegracao():String
	getEmpresa():Empresa
	getErro():Boolean
	getErroIntegracao():Boolean
	getExtraIntegrador():String
	getExtraTela():String
	getIdAnexoPadrao():String
	getIdEmpresa():String
	getMetadados():String
	getSituacaoIntegracao():SituacaoIntegracao
	getTags():String
	setAnexoPadrao​(anexoPadrao:Anexo):void
	setCodigo​(codigo:String):void
	setCodigoIntegracao​(codigoIntegracao:String):void
	setDescricaoErro​(descricaoErro:String):void
	setDescricaoErroIntegracao​(descricaoErroIntegracao:String):void
	setEmpresa​(empresa:Empresa):void
	setErro​(erro:Boolean):void
	setErroIntegracao​(erroIntegracao:Boolean):void
	setExtraIntegrador​(extraIntegrador:String):void
	setExtraTela​(extraTela:String):void
	setIdAnexoPadrao​(idAnexoPadrao:String):void
	setIdEmpresa​(idEmpresa:String):void
	setMetadados​(metadados:String):void
	setSituacaoIntegracao​(situacaoIntegracao:SituacaoIntegracao):void
	setTags​(tags:String):void
	toString():String
}

export namespace GenericModelEmpresa.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GenericModelEmpresaGrupoUsuario {
	getCodigoIntegracaoGrupoUsuario():String
	getCodigoIntegracaoSituacaoIntegracaoTela():String
	getGrupoUsuario():GrupoUsuario
	getIdGrupoUsuario():String
	getIdSituacaoIntegracaoTela():String
	getSituacaoIntegracaoTela():SituacaoIntegracaoTela
	setCodigoIntegracaoGrupoUsuario​(codigoIntegracaoGrupoUsuario:String):void
	setCodigoIntegracaoSituacaoIntegracaoTela​(codigoIntegracaoSituacaoIntegracaoTela:String):void
	setGrupoUsuario​(grupoUsuario:GrupoUsuario):void
	setIdGrupoUsuario​(idGrupoUsuario:String):void
	setIdSituacaoIntegracaoTela​(idSituacaoIntegracaoTela:String):void
	setSituacaoIntegracaoTela​(situacaoIntegracaoTela:SituacaoIntegracaoTela):void
	toString():String
}

export namespace GenericModelEmpresaGrupoUsuario.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GenericModelPrimaryKey {
	equals​(o:any):boolean
	getId():String
	hashCode():Integer
	setId​(id:String):void
	toString():String
}

export namespace GenericModelPrimaryKey.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GrupoCliente {
	getCodigoIntegracaoTabelaPreco():String
	getCodigoIntegracaoTipo():String
	getDescricao():String
	getIdTabelaPreco():String
	getIdTipo():String
	getNome():String
	getPublico():Boolean
	getSituacao():SituacaoGeneric
	getTabelaPreco():TabelaPreco
	getTipo():Dominio
	setCodigoIntegracaoTabelaPreco​(codigoIntegracaoTabelaPreco:String):void
	setCodigoIntegracaoTipo​(codigoIntegracaoTipo:String):void
	setDescricao​(descricao:String):void
	setIdTabelaPreco​(idTabelaPreco:String):void
	setIdTipo​(idTipo:String):void
	setNome​(nome:String):void
	setPublico​(publico:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPreco​(tabelaPreco:TabelaPreco):void
	setTipo​(tipo:Dominio):void
	toString():String
}

export namespace GrupoCliente.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GrupoClienteEstoqueItem {
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoGrupoCliente():String
	getEstoqueItem():EstoqueItem
	getGrupoCliente():GrupoCliente
	getIdEstoqueItem():String
	getIdGrupoCliente():String
	getIdUsuarioAdicionou():String
	getIdUsuarioUltimaEdicao():String
	getSituacao():SituacaoGeneric
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoGrupoCliente​(codigoIntegracaoGrupoCliente:String):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setGrupoCliente​(grupoCliente:GrupoCliente):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdGrupoCliente​(idGrupoCliente:String):void
	setIdUsuarioAdicionou​(idUsuarioAdicionou:String):void
	setIdUsuarioUltimaEdicao​(idUsuarioUltimaEdicao:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace GrupoClienteEstoqueItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GrupoUsuario {
	getNome():String
	getSituacao():SituacaoGeneric
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace GrupoUsuario.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class GrupoUsuarioUsuario {
	getIdUsuario():String
	getSituacao():SituacaoGeneric
	getUsuario():Usuario
	setIdUsuario​(idUsuario:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace GrupoUsuarioUsuario.static {
	export function fromGrupoAndUsuarioEmpresa​(grupoUsuario:GrupoUsuario, usuarioEmpresa:UsuarioEmpresa):GrupoUsuarioUsuario
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class HistoricoAlteracao {
	getDataUltimaAtualizacao():DateTime
	getEmpresa():Empresa
	getEntidade():String
	getIdEmpresa():String
	setDataUltimaAtualizacao​(dataUltimaAtualizacao:DateTime):void
	setEmpresa​(empresa:Empresa):void
	setEntidade​(entidade:String):void
	setIdEmpresa​(idEmpresa:String):void
	toString():String
}

export namespace HistoricoAlteracao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Inspecao {
	getCliente():Cliente
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoDeposito():String
	getCodigoIntegracaoFornecedor():String
	getCodigoIntegracaoInspetor():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoOrdemCompra():String
	getCodigoIntegracaoSituacaoUsuario():String
	getDataFechamento():DateTime
	getDataPrevisao():DateTime
	getDeposito():Deposito
	getDescricao():String
	getEntidade():EntidadeIntegracao
	getFornecedor():Fornecedor
	getIdCliente():String
	getIdDeposito():String
	getIdEntidade():String
	getIdFornecedor():String
	getIdInspetor():String
	getIdMoeda():String
	getIdMotivoCancelamento():String
	getIdOrdemCompra():String
	getIdSituacaoUsuario():String
	getInspetor():Usuario
	getItens():ArrayList<InspecaoItem>
	getMoeda():Moeda
	getMotivoCancelamento():MotivoCancelamento
	getNome():String
	getObservacao():String
	getObservacaoCancelamento():String
	getOrdemCompra():OrdemCompra
	getPesoTotal():BigDecimal
	getQuantidadeItens():BigDecimal
	getSituacao():SituacaoInspecao
	getSituacaoUsuario():Dominio
	getTipo():TipoInspecao
	getValorTotal():BigDecimal
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoDeposito​(codigoIntegracaoDeposito:String):void
	setCodigoIntegracaoFornecedor​(codigoIntegracaoFornecedor:String):void
	setCodigoIntegracaoInspetor​(codigoIntegracaoInspetor:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoOrdemCompra​(codigoIntegracaoOrdemCompra:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setDataFechamento​(dataFechamento:DateTime):void
	setDataPrevisao​(dataPrevisao:DateTime):void
	setDeposito​(deposito:Deposito):void
	setDescricao​(descricao:String):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setFornecedor​(fornecedor:Fornecedor):void
	setIdCliente​(idCliente:String):void
	setIdDeposito​(idDeposito:String):void
	setIdEntidade​(idEntidade:String):void
	setIdFornecedor​(idFornecedor:String):void
	setIdInspetor​(idInspetor:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdOrdemCompra​(idOrdemCompra:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setInspetor​(inspetor:Usuario):void
	setItens​(itens:ArrayList<InspecaoItem>):void
	setMoeda​(moeda:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setOrdemCompra​(ordemCompra:OrdemCompra):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setSituacao​(situacao:SituacaoInspecao):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipo​(tipo:TipoInspecao):void
	setValorTotal​(valorTotal:BigDecimal):void
	toString():String
}

export namespace Inspecao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class InspecaoItem {
	getAlturaBruta():BigDecimal
	getAlturaLiquida():BigDecimal
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoInspecaoItemAgrupamento():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoProduto():String
	getCodigoIntegracaoSituacaoUsuario():String
	getCodigoIntegracaoTipoEstoqueItem():String
	getCodigoOrigem():String
	getComprimentoBruto():BigDecimal
	getComprimentoLiquido():BigDecimal
	getDescricaoSubitens():String
	getEntidade():EntidadeIntegracao
	getEstoqueItem():EstoqueItem
	getIdEntidade():String
	getIdEstoqueItem():String
	getIdInspecao():String
	getIdInspecaoItemAgrupamento():String
	getIdMotivoCancelamento():String
	getIdProduto():String
	getIdSituacaoUsuario():String
	getIdTipoEstoqueItem():String
	getInspecao():Inspecao
	getInspecaoItemAgrupamento():InspecaoItem
	getLarguraBruta():BigDecimal
	getLarguraLiquida():BigDecimal
	getMetragemBruta():BigDecimal
	getMetragemLiquida():BigDecimal
	getMotivoCancelamento():MotivoCancelamento
	getObservacao():String
	getObservacaoCancelamento():String
	getPesoBruto():BigDecimal
	getPesoLiquido():BigDecimal
	getPesoUnitarioBruto():BigDecimal
	getProduto():Produto
	getQuantidade():BigDecimal
	getQuantidadeItens():BigDecimal
	getSituacao():SituacaoGeneric
	getSituacaoUsuario():Dominio
	getTipoEstoqueItem():TipoEstoqueItem
	getValorTotal():BigDecimal
	getValorUnitario():BigDecimal
	setAlturaBruta​(alturaBruta:BigDecimal):void
	setAlturaLiquida​(alturaLiquida:BigDecimal):void
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoInspecaoItemAgrupamento​(codigoIntegracaoInspecaoItemAgrupamento:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoProduto​(codigoIntegracaoProduto:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setCodigoIntegracaoTipoEstoqueItem​(codigoIntegracaoTipoEstoqueItem:String):void
	setCodigoOrigem​(codigoOrigem:String):void
	setComprimentoBruto​(comprimentoBruto:BigDecimal):void
	setComprimentoLiquido​(comprimentoLiquido:BigDecimal):void
	setDescricaoSubitens​(descricaoSubitens:String):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setIdEntidade​(idEntidade:String):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdInspecao​(idInspecao:String):void
	setIdInspecaoItemAgrupamento​(idInspecaoItemAgrupamento:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdProduto​(idProduto:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoEstoqueItem​(idTipoEstoqueItem:String):void
	setInspecao​(inspecao:Inspecao):void
	setInspecaoItemAgrupamento​(inspecaoItemAgrupamento:InspecaoItem):void
	setLarguraBruta​(larguraBruta:BigDecimal):void
	setLarguraLiquida​(larguraLiquida:BigDecimal):void
	setMetragemBruta​(metragemBruta:BigDecimal):void
	setMetragemLiquida​(metragemLiquida:BigDecimal):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setObservacao​(observacao:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setPesoBruto​(pesoBruto:BigDecimal):void
	setPesoLiquido​(pesoLiquido:BigDecimal):void
	setPesoUnitarioBruto​(pesoUnitarioBruto:BigDecimal):void
	setProduto​(produto:Produto):void
	setQuantidade​(quantidade:BigDecimal):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setSituacao​(situacao:SituacaoGeneric):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipoEstoqueItem​(tipoEstoqueItem:TipoEstoqueItem):void
	setValorTotal​(valorTotal:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	toString():String
}

export namespace InspecaoItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Integrador {
	getDataUltimaCargaLimpa():DateTime
	getIdEmpresa():String
	getIdUsuario():String
	getUsuario():Usuario
	setDataUltimaCargaLimpa​(dataUltimaCargaLimpa:DateTime):void
	setIdEmpresa​(idEmpresa:String):void
	setIdUsuario​(idUsuario:String):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace Integrador.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class IntegradorHeader {
	getBuild():String
	getClientId():String
	getClientSecret():String
	getDataUltimaCargaLimpa():DateTime
	getIpServidor():String
	getNomeServidor():String
	setBuild​(build:String):void
	setClientId​(clientId:String):void
	setClientSecret​(clientSecret:String):void
	setDataUltimaCargaLimpa​(dataUltimaCargaLimpa:DateTime):void
	setIpServidor​(ipServidor:String):void
	setNomeServidor​(nomeServidor:String):void
	toString():String
}

export class Material {
	getCodigoIntegracaoCorPredominante():String
	getCodigoIntegracaoPaisOrigem():String
	getCodigoIntegracaoTipoMaterial():String
	getCorPredominante():Cor
	getExibeLoja():Boolean
	getExtraLoja():String
	getIdCorPredominante():String
	getIdPaisOrigem():String
	getIdTipoMaterial():String
	getNome():String
	getPaisOrigem():Pais
	getSituacao():SituacaoGeneric
	getTipoMaterial():TipoMaterial
	getTraducao():String
	setCodigoIntegracaoCorPredominante​(codigoIntegracaoCorPredominante:String):void
	setCodigoIntegracaoPaisOrigem​(codigoIntegracaoPaisOrigem:String):void
	setCodigoIntegracaoTipoMaterial​(codigoIntegracaoTipoMaterial:String):void
	setCorPredominante​(corPredominante:Cor):void
	setExibeLoja​(exibeLoja:Boolean):void
	setExtraLoja​(extraLoja:String):void
	setIdCorPredominante​(idCorPredominante:String):void
	setIdPaisOrigem​(idPaisOrigem:String):void
	setIdTipoMaterial​(idTipoMaterial:String):void
	setNome​(nome:String):void
	setPaisOrigem​(paisOrigem:Pais):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoMaterial​(tipoMaterial:TipoMaterial):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Material.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Metadado {
	getConfiguracao():String
	getDescricao():String
	getEditavel():Boolean
	getEntidade():EntidadeIntegracao
	getExibicaoMetadado():ExibicaoMetadadoSidebar
	getExibicaoMetadadoEdicao():MetadadoExibicaoEdicao
	getExibicaoMetadadoLista():ExibicaoMetadadoSidebar
	getExibicaoMetadadoMissionControl():ExibicaoMetadadoSidebar
	getExibicaoMetadadoSidebar():ExibicaoMetadadoSidebar
	getIntegravel():Boolean
	getKeyText():String
	getLabel():String
	getObrigatorio():Boolean
	getOrdenacao():Integer
	getPesquisavel():Boolean
	getSituacao():SituacaoGeneric
	getTamanhoVisual():String
	getTamanhoVisualEdicao():String
	getTamanhoVisualLista():String
	getTamanhoVisualMissionControl():String
	getTamanhoVisualSidebar():String
	getTipoDado():MetadadoTipo
	getTipoDadoEntidade():EntidadeIntegracao
	getTipoEntidade():String
	getUnico():Boolean
	getValoresPossiveis():String
	getValorPadrao():String
	setConfiguracao​(configuracao:String):void
	setDescricao​(descricao:String):void
	setEditavel​(editavel:Boolean):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setExibicaoMetadado​(exibicaoMetadado:ExibicaoMetadadoSidebar):void
	setExibicaoMetadadoEdicao​(exibicaoMetadadoEdicao:MetadadoExibicaoEdicao):void
	setExibicaoMetadadoLista​(exibicaoMetadadoLista:ExibicaoMetadadoSidebar):void
	setExibicaoMetadadoMissionControl​(exibicaoMetadadoMissionControl:ExibicaoMetadadoSidebar):void
	setExibicaoMetadadoSidebar​(exibicaoMetadadoSidebar:ExibicaoMetadadoSidebar):void
	setIntegravel​(integravel:Boolean):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setLabel​(label:String):void
	setObrigatorio​(obrigatorio:Boolean):void
	setOrdenacao​(ordenacao:Integer):void
	setPesquisavel​(pesquisavel:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTamanhoVisual​(tamanhoVisual:String):void
	setTamanhoVisualEdicao​(tamanhoVisualEdicao:String):void
	setTamanhoVisualLista​(tamanhoVisualLista:String):void
	setTamanhoVisualMissionControl​(tamanhoVisualMissionControl:String):void
	setTamanhoVisualSidebar​(tamanhoVisualSidebar:String):void
	setTipoDado​(tipoDado:MetadadoTipo):void
	setTipoDadoEntidade​(tipoDadoEntidade:EntidadeIntegracao):void
	setTipoEntidade​(tipoEntidade:String):void
	setUnico​(unico:Boolean):void
	setValoresPossiveis​(valoresPossiveis:String):void
	setValorPadrao​(valorPadrao:String):void
	toString():String
}

export namespace Metadado.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export interface MetadadoInterface {
	getMetadados():String
	setMetadados​(metadado:String):void
}

export type MetadadoTipo = MetadadoTipo.static.MetadadoTipo;
export namespace MetadadoTipo.static {
	export interface MetadadoTipo {}

	export const BOOLEAN: MetadadoTipo;
	export const DATA: MetadadoTipo;
	export const DECIMAL: MetadadoTipo;
	export const DIVISOR: MetadadoTipo;
	export const ENTIDADE_MULTIPLA: MetadadoTipo;
	export const ENTIDADE_UNICA: MetadadoTipo;
	export const LISTA_MULTIPLA: MetadadoTipo;
	export const LISTA_UNICA: MetadadoTipo;
	export const STRING: MetadadoTipo;
	export const STRING_MULTIPLA: MetadadoTipo;
}

export class Moeda {
	getCasasDecimais():BigDecimal
	getExibeLoja():Boolean
	getIsoCode():String
	getNome():String
	getSimbolo():String
	getSituacao():SituacaoGeneric
	setCasasDecimais​(casasDecimais:BigDecimal):void
	setExibeLoja​(exibeLoja:Boolean):void
	setIsoCode​(isoCode:String):void
	setNome​(nome:String):void
	setSimbolo​(simbolo:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace Moeda.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class MotivoCancelamento {
	getEntidade():EntidadeIntegracao
	getNome():String
	getSituacao():SituacaoGeneric
	setEntidade​(entidade:EntidadeIntegracao):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace MotivoCancelamento.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Negociacao {
	getCampanha():Campanha
	getCliente():Cliente
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoCondicaoPagamento():String
	getCodigoIntegracaoEndereco():String
	getCodigoIntegracaoFormaPagamento():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoOportunidade():String
	getCodigoIntegracaoPlanejamento():String
	getCodigoIntegracaoRepresentante():String
	getCodigoIntegracaoTipoFrete():String
	getCodigoIntegracaoTipoVenda():String
	getCodigoOrdemCompra():String
	getCondicaoPagamento():CondicaoPagamento
	getDataLimiteMissionControl():DateTime
	getDataVencimento():DateTime
	getEndereco():Endereco
	getFatoresConversao():String
	getFormaPagamento():FormaPagamento
	getIdCampanha():String
	getIdCliente():String
	getIdCondicaoPagamento():String
	getIdEndereco():String
	getIdFormaPagamento():String
	getIdMoeda():String
	getIdOportunidade():String
	getIdPlanejamento():String
	getIdRepresentante():String
	getIdSituacaoUsuario():String
	getIdTipoFrete():String
	getIdTipoVenda():String
	getIdVendedor():String
	getItens():ArrayList<NegociacaoItem>
	getMoeda():Moeda
	getNecessitaRecalculo():Boolean
	getNome():String
	getObservacao():String
	getOportunidade():Oportunidade
	getPesoTotal():BigDecimal
	getPlanejamento():Planejamento
	getQuantidadeItens():BigDecimal
	getRepresentante():Representante
	getReservas():ArrayList<ReservaItem>
	getSituacao():SituacaoNegociacao
	getSituacaoUsuario():Dominio
	getTipoFrete():TipoFrete
	getTipoVenda():TipoVenda
	getTotalizadores():String
	getTotalizadoresMissionControl():String
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getVendedor():Usuario
	setCampanha​(campanha:Campanha):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoCondicaoPagamento​(codigoIntegracaoCondicaoPagamento:String):void
	setCodigoIntegracaoEndereco​(codigoIntegracaoEndereco:String):void
	setCodigoIntegracaoFormaPagamento​(codigoIntegracaoFormaPagamento:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoOportunidade​(codigoIntegracaoOportunidade:String):void
	setCodigoIntegracaoPlanejamento​(codigoIntegracaoPlanejamento:String):void
	setCodigoIntegracaoRepresentante​(codigoIntegracaoRepresentante:String):void
	setCodigoIntegracaoTipoFrete​(codigoIntegracaoTipoFrete:String):void
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setCodigoOrdemCompra​(codigoOrdemCompra:String):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setDataVencimento​(dataVencimento:DateTime):void
	setEndereco​(endereco:Endereco):void
	setFatoresConversao​(fatoresConversao:String):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setIdCampanha​(idCampanha:String):void
	setIdCliente​(idCliente:String):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdEndereco​(idEndereco:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdOportunidade​(idOportunidade:String):void
	setIdPlanejamento​(idPlanejamento:String):void
	setIdRepresentante​(idRepresentante:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoFrete​(idTipoFrete:String):void
	setIdTipoVenda​(idTipoVenda:String):void
	setIdVendedor​(idVendedor:String):void
	setItens​(itens:ArrayList<NegociacaoItem>):void
	setMoeda​(moeda:Moeda):void
	setNecessitaRecalculo​(necessitaRecalculo:Boolean):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setOportunidade​(oportunidade:Oportunidade):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setPlanejamento​(planejamento:Planejamento):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setRepresentante​(representante:Representante):void
	setReservas​(reservas:ArrayList<ReservaItem>):void
	setSituacao​(situacao:SituacaoNegociacao):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipoFrete​(tipoFrete:TipoFrete):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	setTotalizadores​(totalizadores:String):void
	setTotalizadoresMissionControl​(totalizadoresMissionControl:String):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Negociacao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class NegociacaoItem {
	getCodigoIntegracaoEstoqueItemAgrupamentoOriginal():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMoedaConversao():String
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoNegociacao():String
	getCodigoIntegracaoReservaItem():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getContabiliza():Boolean
	getEstoqueItemAgrupamentoOriginal():EstoqueItem
	getIdEstoqueItemAgrupamentoOriginal():String
	getIdMoeda():String
	getIdMoedaConversao():String
	getIdMoedaOriginal():String
	getIdMotivoCancelamento():String
	getIdNegociacao():String
	getIdReservaItem():String
	getIdTabelaPrecoItem():String
	getMoeda():Moeda
	getMoedaConversao():Moeda
	getMoedaOriginal():Moeda
	getMotivoCancelamento():Dominio
	getNegociacao():Negociacao
	getParecerCancelamento():String
	getReservaItem():ReservaItem
	getSituacao():SituacaoGeneric
	getTabelaPrecoItem():TabelaPrecoItem
	getValorImpostoDestacadoConvertido():BigDecimal
	getValorTotalConvertido():BigDecimal
	getValorUnitarioConvertido():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setCodigoIntegracaoEstoqueItemAgrupamentoOriginal​(codigoIntegracaoEstoqueItemAgrupamentoOriginal:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMoedaConversao​(codigoIntegracaoMoedaConversao:String):void
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoNegociacao​(codigoIntegracaoNegociacao:String):void
	setCodigoIntegracaoReservaItem​(codigoIntegracaoReservaItem:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setContabiliza​(contabiliza:Boolean):void
	setEstoqueItemAgrupamentoOriginal​(estoqueItemAgrupamentoOriginal:EstoqueItem):void
	setIdEstoqueItemAgrupamentoOriginal​(idEstoqueItemAgrupamentoOriginal:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMoedaConversao​(idMoedaConversao:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdNegociacao​(idNegociacao:String):void
	setIdReservaItem​(idReservaItem:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setMoeda​(moeda:Moeda):void
	setMoedaConversao​(moedaConversao:Moeda):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:Dominio):void
	setNegociacao​(negociacao:Negociacao):void
	setParecerCancelamento​(parecerCancelamento:String):void
	setReservaItem​(reservaItem:ReservaItem):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setValorImpostoDestacadoConvertido​(valorImpostoDestacadoConvertido:BigDecimal):void
	setValorTotalConvertido​(valorTotalConvertido:BigDecimal):void
	setValorUnitarioConvertido​(valorUnitarioConvertido:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace NegociacaoItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Oferta {
	getCampanha():Campanha
	getClienteUnico():Cliente
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoClienteUnico():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoOportunidade():String
	getCodigoIntegracaoPlanejamento():String
	getCodigoIntegracaoTipoVenda():String
	getCodigoIntegracaoVendedor():String
	getDataLimiteMissionControl():DateTime
	getDataMinimaNotificacaoVencimento():DateTime
	getDataVencimento():DateTime
	getIdCampanha():String
	getIdClienteUnico():String
	getIdMotivoCancelamento():String
	getIdOportunidade():String
	getIdPlanejamento():String
	getIdTipoVenda():String
	getIdVendedor():String
	getMotivoCancelamento():MotivoCancelamento
	getNome():String
	getObservacaoCancelamento():String
	getOportunidade():Oportunidade
	getPesoTotal():BigDecimal
	getPlanejamento():Oportunidade
	getQuantidadeClientes():Integer
	getQuantidadeItens():Integer
	getQuantidadeVisualizacoesConferencia():Integer
	getQuantidadeVisualizacoesEmail():Integer
	getSituacao():SituacaoOferta
	getTipoVenda():TipoVenda
	getTotalizadores():String
	getTotalizadoresMissionControl():String
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getVendedor():Usuario
	setCampanha​(campanha:Campanha):void
	setClienteUnico​(clienteUnico:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoClienteUnico​(codigoIntegracaoClienteUnico:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoOportunidade​(codigoIntegracaoOportunidade:String):void
	setCodigoIntegracaoPlanejamento​(codigoIntegracaoPlanejamento:String):void
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setCodigoIntegracaoVendedor​(codigoIntegracaoVendedor:String):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setDataMinimaNotificacaoVencimento​(dataMinimaNotificacaoVencimento:DateTime):void
	setDataVencimento​(dataVencimento:DateTime):void
	setIdCampanha​(idCampanha:String):void
	setIdClienteUnico​(idClienteUnico:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdOportunidade​(idOportunidade:String):void
	setIdPlanejamento​(idPlanejamento:String):void
	setIdTipoVenda​(idTipoVenda:String):void
	setIdVendedor​(idVendedor:String):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setNome​(nome:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setOportunidade​(oportunidade:Oportunidade):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setPlanejamento​(planejamento:Oportunidade):void
	setQuantidadeClientes​(quantidadeClientes:Integer):void
	setQuantidadeItens​(quantidadeItens:Integer):void
	setQuantidadeVisualizacoesConferencia​(quantidadeVisualizacoesConferencia:Integer):void
	setQuantidadeVisualizacoesEmail​(quantidadeVisualizacoesEmail:Integer):void
	setSituacao​(situacao:SituacaoOferta):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	setTotalizadores​(totalizadores:String):void
	setTotalizadoresMissionControl​(totalizadoresMissionControl:String):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Oferta.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class OfertaCliente {
	getCliente():Cliente
	getDataLimiteMissionControl():DateTime
	getIdCliente():String
	getIdOferta():String
	getNomeContatos():String
	getOferta():Oferta
	getQuantidadeVisualizacoesConferencia():Integer
	getQuantidadeVisualizacoesEmail():Integer
	getSituacao():SituacaoCancelavel
	setCliente​(cliente:Cliente):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setIdCliente​(idCliente:String):void
	setIdOferta​(idOferta:String):void
	setNomeContatos​(nomeContatos:String):void
	setOferta​(oferta:Oferta):void
	setQuantidadeVisualizacoesConferencia​(quantidadeVisualizacoesConferencia:Integer):void
	setQuantidadeVisualizacoesEmail​(quantidadeVisualizacoesEmail:Integer):void
	setSituacao​(situacao:SituacaoCancelavel):void
	toString():String
}

export namespace OfertaCliente.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class OfertaClienteContato {
	getContato():Contato
	getIdContato():String
	getIdOfertaCliente():String
	getOfertaCliente():OfertaCliente
	getSituacao():SituacaoCancelavel
	setContato​(contato:Contato):void
	setIdContato​(idContato:String):void
	setIdOfertaCliente​(idOfertaCliente:String):void
	setOfertaCliente​(ofertaCliente:OfertaCliente):void
	setSituacao​(situacao:SituacaoCancelavel):void
	toString():String
}

export namespace OfertaClienteContato.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class OfertaItem {
	getAltura():BigDecimal
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoMoedaConversao():String
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getComprimento():BigDecimal
	getEstoqueItem():EstoqueItem
	getIdEstoqueItem():String
	getIdMoedaConversao():String
	getIdMoedaOriginal():String
	getIdOferta():String
	getIdTabelaPrecoItem():String
	getLargura():BigDecimal
	getMetragem():BigDecimal
	getMoedaConversao():Moeda
	getMoedaOriginal():Moeda
	getNomeExibicao():String
	getObservacao():String
	getOferta():Oferta
	getPeso():BigDecimal
	getQuantidade():BigDecimal
	getSituacao():SituacaoCancelavel
	getTabelaPrecoItem():TabelaPrecoItem
	getValorImpostoDestacado():BigDecimal
	getValorImpostoDestacadoConvertido():BigDecimal
	getValorTotal():BigDecimal
	getValorTotalConvertido():BigDecimal
	getValorUnitario():BigDecimal
	getValorUnitarioConvertido():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setAltura​(altura:BigDecimal):void
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoMoedaConversao​(codigoIntegracaoMoedaConversao:String):void
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setComprimento​(comprimento:BigDecimal):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdMoedaConversao​(idMoedaConversao:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdOferta​(idOferta:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setLargura​(largura:BigDecimal):void
	setMetragem​(metragem:BigDecimal):void
	setMoedaConversao​(moedaConversao:Moeda):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setNomeExibicao​(nomeExibicao:String):void
	setObservacao​(observacao:String):void
	setOferta​(oferta:Oferta):void
	setPeso​(peso:BigDecimal):void
	setQuantidade​(quantidade:BigDecimal):void
	setSituacao​(situacao:SituacaoCancelavel):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorImpostoDestacadoConvertido​(valorImpostoDestacadoConvertido:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setValorTotalConvertido​(valorTotalConvertido:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	setValorUnitarioConvertido​(valorUnitarioConvertido:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace OfertaItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class OfertaRejeicao {
	getCliente():Cliente
	getIdCliente():String
	getIdOferta():String
	getIdOfertaCliente():String
	getIdOfertaItem():String
	getOferta():Oferta
	getOfertaCliente():OfertaCliente
	getOfertaItem():OfertaItem
	setCliente​(cliente:Cliente):void
	setIdCliente​(idCliente:String):void
	setIdOferta​(idOferta:String):void
	setIdOfertaCliente​(idOfertaCliente:String):void
	setIdOfertaItem​(idOfertaItem:String):void
	setOferta​(oferta:Oferta):void
	setOfertaCliente​(ofertaCliente:OfertaCliente):void
	setOfertaItem​(ofertaItem:OfertaItem):void
	toString():String
}

export namespace OfertaRejeicao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Oportunidade {
	getCampanha():Campanha
	getCliente():Cliente
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoCondicaoPagamento():String
	getCodigoIntegracaoEndereco():String
	getCodigoIntegracaoFormaPagamento():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoSituacaoUsuario():String
	getCodigoIntegracaoTipoVenda():String
	getCodigoIntegracaoVendedor():String
	getCondicaoPagamento():CondicaoPagamento
	getDataLimiteMissionControl():DateTime
	getDataMinimaNotificacaoVencimento():DateTime
	getDataPrevisao():DateTime
	getDataVencimento():DateTime
	getEndereco():Endereco
	getFormaPagamento():FormaPagamento
	getIdCampanha():String
	getIdCliente():String
	getIdCondicaoPagamento():String
	getIdEndereco():String
	getIdFormaPagamento():String
	getIdMoeda():String
	getIdMotivoCancelamento():String
	getIdSituacaoUsuario():String
	getIdTipoVenda():String
	getIdVendedor():String
	getMoeda():Moeda
	getMotivoCancelamento():MotivoCancelamento
	getNome():String
	getObservacao():String
	getObservacaoCancelamento():String
	getQuantidadeFaturamento():BigDecimal
	getQuantidadeItens():BigDecimal
	getQuantidadeNegociacao():BigDecimal
	getQuantidadeOferta():BigDecimal
	getQuantidadePedido():BigDecimal
	getQuantidadePlanejamento():BigDecimal
	getSituacao():SituacaoOportunidade
	getSituacaoUsuario():Dominio
	getTipoVenda():TipoVenda
	getTotalizadores():String
	getTotalizadoresMissionControl():String
	getValorTotalSolicitado():BigDecimal
	getVendedor():Usuario
	setCampanha​(campanha:Campanha):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoCondicaoPagamento​(codigoIntegracaoCondicaoPagamento:String):void
	setCodigoIntegracaoEndereco​(codigoIntegracaoEndereco:String):void
	setCodigoIntegracaoFormaPagamento​(codigoIntegracaoFormaPagamento:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setCodigoIntegracaoVendedor​(codigoIntegracaoVendedor:String):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setDataMinimaNotificacaoVencimento​(dataMinimaNotificacaoVencimento:DateTime):void
	setDataPrevisao​(dataPrevisao:DateTime):void
	setDataVencimento​(dataVencimento:DateTime):void
	setEndereco​(endereco:Endereco):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setIdCampanha​(idCampanha:String):void
	setIdCliente​(idCliente:String):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdEndereco​(idEndereco:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoVenda​(idTipoVenda:String):void
	setIdVendedor​(idVendedor:String):void
	setMoeda​(moeda:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setQuantidadeFaturamento​(quantidadeFaturamento:BigDecimal):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setQuantidadeNegociacao​(quantidadeNegociacao:BigDecimal):void
	setQuantidadeOferta​(quantidadeOferta:BigDecimal):void
	setQuantidadePedido​(quantidadePedido:BigDecimal):void
	setQuantidadePlanejamento​(quantidadePlanejamento:BigDecimal):void
	setSituacao​(situacao:SituacaoOportunidade):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	setTotalizadores​(totalizadores:String):void
	setTotalizadoresMissionControl​(totalizadoresMissionControl:String):void
	setValorTotalSolicitado​(valorTotalSolicitado:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Oportunidade.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class OportunidadeProduto {
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoOportunidade():String
	getCodigoIntegracaoProduto():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getCodigoIntegracaoTipoEstoqueItem():String
	getIdMoedaOriginal():String
	getIdOportunidade():String
	getIdProduto():String
	getIdTabelaPrecoItem():String
	getIdTipoEstoqueItem():String
	getMoedaOriginal():Moeda
	getNomeExibicao():String
	getOportunidade():Oportunidade
	getProduto():Produto
	getQuantidadeAtendida():BigDecimal
	getQuantidadeSolicitada():BigDecimal
	getSituacao():SituacaoGeneric
	getTabelaPrecoItem():TabelaPrecoItem
	getTipoEstoqueItem():TipoEstoqueItem
	getValorTotalSolicitado():BigDecimal
	getValorUnitario():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoOportunidade​(codigoIntegracaoOportunidade:String):void
	setCodigoIntegracaoProduto​(codigoIntegracaoProduto:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setCodigoIntegracaoTipoEstoqueItem​(codigoIntegracaoTipoEstoqueItem:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdOportunidade​(idOportunidade:String):void
	setIdProduto​(idProduto:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setIdTipoEstoqueItem​(idTipoEstoqueItem:String):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setNomeExibicao​(nomeExibicao:String):void
	setOportunidade​(oportunidade:Oportunidade):void
	setProduto​(produto:Produto):void
	setQuantidadeAtendida​(quantidadeAtendida:BigDecimal):void
	setQuantidadeSolicitada​(quantidadeSolicitada:BigDecimal):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setTipoEstoqueItem​(tipoEstoqueItem:TipoEstoqueItem):void
	setValorTotalSolicitado​(valorTotalSolicitado:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace OportunidadeProduto.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class OrdemCompra {
	getCliente():Cliente
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoDeposito():String
	getCodigoIntegracaoFornecedor():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoSituacaoUsuario():String
	getDataPrevisao():DateTime
	getDeposito():Deposito
	getDescricao():String
	getFornecedor():Fornecedor
	getIdCliente():String
	getIdDeposito():String
	getIdFornecedor():String
	getIdInspetor():String
	getIdMoeda():String
	getIdSituacaoUsuario():String
	getInspetor():Usuario
	getMoeda():Moeda
	getNome():String
	getObservacao():String
	getQuantidadeAtendida():BigDecimal
	getQuantidadeSolicitada():BigDecimal
	getSituacao():SituacaoOrdemCompra
	getSituacaoUsuario():Dominio
	getValorTotalAtendido():BigDecimal
	getValorTotalSolicitado():BigDecimal
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoDeposito​(codigoIntegracaoDeposito:String):void
	setCodigoIntegracaoFornecedor​(codigoIntegracaoFornecedor:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setDataPrevisao​(dataPrevisao:DateTime):void
	setDeposito​(deposito:Deposito):void
	setDescricao​(descricao:String):void
	setFornecedor​(fornecedor:Fornecedor):void
	setIdCliente​(idCliente:String):void
	setIdDeposito​(idDeposito:String):void
	setIdFornecedor​(idFornecedor:String):void
	setIdInspetor​(idInspetor:String):void
	setIdMoeda​(idMoeda:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setInspetor​(inspetor:Usuario):void
	setMoeda​(moeda:Moeda):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setQuantidadeAtendida​(quantidadeAtendida:BigDecimal):void
	setQuantidadeSolicitada​(quantidadeSolicitada:BigDecimal):void
	setSituacao​(situacao:SituacaoOrdemCompra):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setValorTotalAtendido​(valorTotalAtendido:BigDecimal):void
	setValorTotalSolicitado​(valorTotalSolicitado:BigDecimal):void
	toString():String
}

export namespace OrdemCompra.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Pais {
	getExibeLoja():Boolean
	getIsoCode():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setExibeLoja​(exibeLoja:Boolean):void
	setIsoCode​(isoCode:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Pais.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class PathDTO {
	getExtensoes():ArrayList<String>
	getIdentificador():String
	getPath():String
	nomeArquivoValido​(absolutePath:String):boolean
	processar​(anexo:AnexoDTO):void
	setExtensoes​(extensoes:ArrayList<String>):void
	setIdentificador​(identificador:String):void
	setPath​(path:String):void
	toString():String
}

export class Pedido {
	getCampanha():Campanha
	getCliente():Cliente
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoCondicaoPagamento():String
	getCodigoIntegracaoEndereco():String
	getCodigoIntegracaoFormaPagamento():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoNegociacao():String
	getCodigoIntegracaoOportunidade():String
	getCodigoIntegracaoPlanejamento():String
	getCodigoIntegracaoRepresentante():String
	getCodigoIntegracaoSituacaoUsuario():String
	getCodigoIntegracaoTipoFrete():String
	getCodigoIntegracaoTipoVenda():String
	getCodigoIntegracaoVendedor():String
	getCodigoOrdemCompra():String
	getCondicaoPagamento():CondicaoPagamento
	getDataCancelamento():DateTime
	getDataFaturamento():DateTime
	getDataFechamento():DateTime
	getDataLimiteMissionControl():DateTime
	getDataVencida():DateTime
	getDataVencimento():DateTime
	getEndereco():Endereco
	getFatoresConversao():String
	getFaturamentoConcluido():Boolean
	getFormaPagamento():FormaPagamento
	getIdCampanha():String
	getIdCliente():String
	getIdCondicaoPagamento():String
	getIdEndereco():String
	getIdFormaPagamento():String
	getIdMoeda():String
	getIdMotivoCancelamento():String
	getIdNegociacao():String
	getIdOportunidade():String
	getIdPlanejamento():String
	getIdRepresentante():String
	getIdSituacaoUsuario():String
	getIdTipoFrete():String
	getIdTipoVenda():String
	getIdVendedor():String
	getItens():ArrayList<PedidoItem>
	getMoeda():Moeda
	getMotivoCancelamento():MotivoCancelamento
	getNecessitaRecalculo():Boolean
	getNegociacao():Negociacao
	getNome():String
	getObservacao():String
	getObservacaoCancelamento():String
	getOportunidade():Oportunidade
	getPesoTotal():BigDecimal
	getPlanejamento():Planejamento
	getQuantidadeItens():BigDecimal
	getRepresentante():Representante
	getReservas():ArrayList<ReservaItem>
	getSituacao():SituacaoPedido
	getSituacaoUsuario():Dominio
	getTipoFrete():TipoFrete
	getTipoVenda():TipoVenda
	getTotalizadores():String
	getTotalizadoresMissionControl():String
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getVendedor():Usuario
	setCampanha​(campanha:Campanha):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoCondicaoPagamento​(codigoIntegracaoCondicaoPagamento:String):void
	setCodigoIntegracaoEndereco​(codigoIntegracaoEndereco:String):void
	setCodigoIntegracaoFormaPagamento​(codigoIntegracaoFormaPagamento:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoNegociacao​(codigoIntegracaoNegociacao:String):void
	setCodigoIntegracaoOportunidade​(codigoIntegracaoOportunidade:String):void
	setCodigoIntegracaoPlanejamento​(codigoIntegracaoPlanejamento:String):void
	setCodigoIntegracaoRepresentante​(codigoIntegracaoRepresentante:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setCodigoIntegracaoTipoFrete​(codigoIntegracaoTipoFrete:String):void
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setCodigoIntegracaoVendedor​(codigoIntegracaoVendedor:String):void
	setCodigoOrdemCompra​(codigoOrdemCompra:String):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setDataCancelamento​(dataCancelamento:DateTime):void
	setDataFaturamento​(dataFaturamento:DateTime):void
	setDataFechamento​(dataFechamento:DateTime):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setDataVencida​(dataVencida:DateTime):void
	setDataVencimento​(dataVencimento:DateTime):void
	setEndereco​(endereco:Endereco):void
	setFatoresConversao​(fatoresConversao:String):void
	setFaturamentoConcluido​(faturamentoConcluido:Boolean):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setIdCampanha​(idCampanha:String):void
	setIdCliente​(idCliente:String):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdEndereco​(idEndereco:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdNegociacao​(idNegociacao:String):void
	setIdOportunidade​(idOportunidade:String):void
	setIdPlanejamento​(idPlanejamento:String):void
	setIdRepresentante​(idRepresentante:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoFrete​(idTipoFrete:String):void
	setIdTipoVenda​(idTipoVenda:String):void
	setIdVendedor​(idVendedor:String):void
	setItens​(itens:ArrayList<PedidoItem>):void
	setMoeda​(moeda:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setNecessitaRecalculo​(necessitaRecalculo:Boolean):void
	setNegociacao​(negociacao:Negociacao):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setOportunidade​(oportunidade:Oportunidade):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setPlanejamento​(planejamento:Planejamento):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setRepresentante​(representante:Representante):void
	setReservas​(reservas:ArrayList<ReservaItem>):void
	setSituacao​(situacao:SituacaoPedido):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipoFrete​(tipoFrete:TipoFrete):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	setTotalizadores​(totalizadores:String):void
	setTotalizadoresMissionControl​(totalizadoresMissionControl:String):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Pedido.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class PedidoExtraIntegrador {
	getDataUltimaAtualizacao():DateTime
	getFaturamentoConcluido():String
	setDataUltimaAtualizacao​(dataUltimaAtualizacao:DateTime):void
	setFaturamentoConcluido​(faturamentoConcluido:String):void
}

export class PedidoItem {
	getAltura():BigDecimal
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoEstoqueItemAgrupamentoOriginal():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMoedaConversao():String
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoPedido():String
	getCodigoIntegracaoReservaItem():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getComprimento():BigDecimal
	getContabiliza():Boolean
	getEstoqueItem():EstoqueItem
	getEstoqueItemAgrupamentoOriginal():EstoqueItem
	getIdEstoqueItem():String
	getIdEstoqueItemAgrupamentoOriginal():String
	getIdMoeda():String
	getIdMoedaConversao():String
	getIdMoedaOriginal():String
	getIdMotivoCancelamento():String
	getIdPedido():String
	getIdReservaItem():String
	getIdTabelaPrecoItem():String
	getLargura():BigDecimal
	getMetragem():BigDecimal
	getMoeda():Moeda
	getMoedaConversao():Moeda
	getMoedaOriginal():Moeda
	getMotivoCancelamento():Dominio
	getNomeExibicao():String
	getParecerCancelamento():String
	getPedido():Pedido
	getPeso():BigDecimal
	getQuantidade():BigDecimal
	getQuantidadeDevolvida():BigDecimal
	getQuantidadeFaturada():BigDecimal
	getReservaItem():ReservaItem
	getSituacao():SituacaoGeneric
	getTabelaPrecoItem():TabelaPrecoItem
	getValorImpostoDestacado():BigDecimal
	getValorImpostoDestacadoConvertido():BigDecimal
	getValorTotal():BigDecimal
	getValorTotalConvertido():BigDecimal
	getValorUnitario():BigDecimal
	getValorUnitarioConvertido():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setAltura​(altura:BigDecimal):void
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoEstoqueItemAgrupamentoOriginal​(codigoIntegracaoEstoqueItemAgrupamentoOriginal:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMoedaConversao​(codigoIntegracaoMoedaConversao:String):void
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoPedido​(codigoIntegracaoPedido:String):void
	setCodigoIntegracaoReservaItem​(codigoIntegracaoReservaItem:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setComprimento​(comprimento:BigDecimal):void
	setContabiliza​(contabiliza:Boolean):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setEstoqueItemAgrupamentoOriginal​(estoqueItemAgrupamentoOriginal:EstoqueItem):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdEstoqueItemAgrupamentoOriginal​(idEstoqueItemAgrupamentoOriginal:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMoedaConversao​(idMoedaConversao:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdPedido​(idPedido:String):void
	setIdReservaItem​(idReservaItem:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setLargura​(largura:BigDecimal):void
	setMetragem​(metragem:BigDecimal):void
	setMoeda​(moeda:Moeda):void
	setMoedaConversao​(moedaConversao:Moeda):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:Dominio):void
	setNomeExibicao​(nomeExibicao:String):void
	setParecerCancelamento​(parecerCancelamento:String):void
	setPedido​(pedido:Pedido):void
	setPeso​(peso:BigDecimal):void
	setQuantidade​(quantidade:BigDecimal):void
	setQuantidadeDevolvida​(quantidadeDevolvida:BigDecimal):void
	setQuantidadeFaturada​(quantidadeFaturada:BigDecimal):void
	setReservaItem​(reservaItem:ReservaItem):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorImpostoDestacadoConvertido​(valorImpostoDestacadoConvertido:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setValorTotalConvertido​(valorTotalConvertido:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	setValorUnitarioConvertido​(valorUnitarioConvertido:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace PedidoItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Pendencia {
	getDataAcao():DateTime
	getDescricaoPendencia():String
	getDominio():Dominio
	getEntidade():EntidadeIntegracao
	getIdDominio():String
	getIdEntidade():String
	getIdUsuarioAcao():String
	getIdUsuarioCriacao():String
	getParecer():String
	getSituacao():SituacaoPendencia
	getUsuarioAcao():Usuario
	getUsuarioCriacao():Usuario
	setDataAcao​(dataAcao:DateTime):void
	setDescricaoPendencia​(descricaoPendencia:String):void
	setDominio​(dominio:Dominio):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setIdDominio​(idDominio:String):void
	setIdEntidade​(idEntidade:String):void
	setIdUsuarioAcao​(idUsuarioAcao:String):void
	setIdUsuarioCriacao​(idUsuarioCriacao:String):void
	setParecer​(parecer:String):void
	setSituacao​(situacao:SituacaoPendencia):void
	setUsuarioAcao​(usuarioAcao:Usuario):void
	setUsuarioCriacao​(usuarioCriacao:Usuario):void
	toString():String
}

export namespace Pendencia.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Planejamento {
	getCampanha():Campanha
	getCliente():Cliente
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoCondicaoPagamento():String
	getCodigoIntegracaoEndereco():String
	getCodigoIntegracaoFormaPagamento():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMotivoCancelamento():String
	getCodigoIntegracaoOportunidade():String
	getCodigoIntegracaoRepresentante():String
	getCodigoIntegracaoSituacaoUsuario():String
	getCodigoIntegracaoTipoFrete():String
	getCodigoIntegracaoTipoVenda():String
	getCodigoIntegracaoVendedor():String
	getCodigoOrdemCompra():String
	getCondicaoPagamento():CondicaoPagamento
	getDataLimiteMissionControl():DateTime
	getDataMinimaNotificacaoVencimento():DateTime
	getDataPrevisao():DateTime
	getDataVencimento():DateTime
	getEndereco():Endereco
	getEstoque():ArrayList<PlanejamentoEstoqueItem>
	getFatoresConversao():String
	getFormaPagamento():FormaPagamento
	getIdCampanha():String
	getIdCliente():String
	getIdCondicaoPagamento():String
	getIdEndereco():String
	getIdFormaPagamento():String
	getIdMoeda():String
	getIdMotivoCancelamento():String
	getIdOportunidade():String
	getIdRepresentante():String
	getIdSituacaoUsuario():String
	getIdTipoFrete():String
	getIdTipoVenda():String
	getIdVendedor():String
	getMoeda():Moeda
	getMotivoCancelamento():MotivoCancelamento
	getNecessitaRecalculo():Boolean
	getNome():String
	getObservacao():String
	getObservacaoCancelamento():String
	getOportunidade():Oportunidade
	getPesoTotal():BigDecimal
	getProdutos():ArrayList<PlanejamentoProduto>
	getQuantidadeItens():BigDecimal
	getRepresentante():Representante
	getSituacao():SituacaoPlanejamento
	getSituacaoUsuario():Dominio
	getTipoFrete():TipoFrete
	getTipoVenda():TipoVenda
	getTotalizadores():String
	getTotalizadoresMissionControl():String
	getValorImpostoDestacado():BigDecimal
	getValorTotal():BigDecimal
	getVendedor():Usuario
	setCampanha​(campanha:Campanha):void
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoCondicaoPagamento​(codigoIntegracaoCondicaoPagamento:String):void
	setCodigoIntegracaoEndereco​(codigoIntegracaoEndereco:String):void
	setCodigoIntegracaoFormaPagamento​(codigoIntegracaoFormaPagamento:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMotivoCancelamento​(codigoIntegracaoMotivoCancelamento:String):void
	setCodigoIntegracaoOportunidade​(codigoIntegracaoOportunidade:String):void
	setCodigoIntegracaoRepresentante​(codigoIntegracaoRepresentante:String):void
	setCodigoIntegracaoSituacaoUsuario​(codigoIntegracaoSituacaoUsuario:String):void
	setCodigoIntegracaoTipoFrete​(codigoIntegracaoTipoFrete:String):void
	setCodigoIntegracaoTipoVenda​(codigoIntegracaoTipoVenda:String):void
	setCodigoIntegracaoVendedor​(codigoIntegracaoVendedor:String):void
	setCodigoOrdemCompra​(codigoOrdemCompra:String):void
	setCondicaoPagamento​(condicaoPagamento:CondicaoPagamento):void
	setDataLimiteMissionControl​(dataLimiteMissionControl:DateTime):void
	setDataMinimaNotificacaoVencimento​(dataMinimaNotificacaoVencimento:DateTime):void
	setDataPrevisao​(dataPrevisao:DateTime):void
	setDataVencimento​(dataVencimento:DateTime):void
	setEndereco​(endereco:Endereco):void
	setEstoque​(estoque:ArrayList<PlanejamentoEstoqueItem>):void
	setFatoresConversao​(fatoresConversao:String):void
	setFormaPagamento​(formaPagamento:FormaPagamento):void
	setIdCampanha​(idCampanha:String):void
	setIdCliente​(idCliente:String):void
	setIdCondicaoPagamento​(idCondicaoPagamento:String):void
	setIdEndereco​(idEndereco:String):void
	setIdFormaPagamento​(idFormaPagamento:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMotivoCancelamento​(idMotivoCancelamento:String):void
	setIdOportunidade​(idOportunidade:String):void
	setIdRepresentante​(idRepresentante:String):void
	setIdSituacaoUsuario​(idSituacaoUsuario:String):void
	setIdTipoFrete​(idTipoFrete:String):void
	setIdTipoVenda​(idTipoVenda:String):void
	setIdVendedor​(idVendedor:String):void
	setMoeda​(moeda:Moeda):void
	setMotivoCancelamento​(motivoCancelamento:MotivoCancelamento):void
	setNecessitaRecalculo​(necessitaRecalculo:Boolean):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setObservacaoCancelamento​(observacaoCancelamento:String):void
	setOportunidade​(oportunidade:Oportunidade):void
	setPesoTotal​(pesoTotal:BigDecimal):void
	setProdutos​(produtos:ArrayList<PlanejamentoProduto>):void
	setQuantidadeItens​(quantidadeItens:BigDecimal):void
	setRepresentante​(representante:Representante):void
	setSituacao​(situacao:SituacaoPlanejamento):void
	setSituacaoUsuario​(situacaoUsuario:Dominio):void
	setTipoFrete​(tipoFrete:TipoFrete):void
	setTipoVenda​(tipoVenda:TipoVenda):void
	setTotalizadores​(totalizadores:String):void
	setTotalizadoresMissionControl​(totalizadoresMissionControl:String):void
	setValorImpostoDestacado​(valorImpostoDestacado:BigDecimal):void
	setValorTotal​(valorTotal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace Planejamento.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class PlanejamentoEstoqueItem {
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoEstoqueItemAgrupamentoOriginal():String
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoNegociacao():String
	getCodigoIntegracaoPedido():String
	getCodigoIntegracaoPlanejamento():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getEstoqueItem():EstoqueItem
	getEstoqueItemAgrupamentoOriginal():EstoqueItem
	getIdEstoqueItem():String
	getIdEstoqueItemAgrupamentoOriginal():String
	getIdMoedaOriginal():String
	getIdNegociacao():String
	getIdPedido():String
	getIdPlanejamento():String
	getIdTabelaPrecoItem():String
	getMoedaOriginal():Moeda
	getNegociacao():Negociacao
	getNomeExibicao():String
	getPedido():Pedido
	getPlanejamento():Planejamento
	getSituacao():SituacaoGeneric
	getTabelaPrecoItem():TabelaPrecoItem
	getTipo():TipoPlanejamentoEstoqueItem
	getValorTotalSolicitado():BigDecimal
	getValorUnitario():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoEstoqueItemAgrupamentoOriginal​(codigoIntegracaoEstoqueItemAgrupamentoOriginal:String):void
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoNegociacao​(codigoIntegracaoNegociacao:String):void
	setCodigoIntegracaoPedido​(codigoIntegracaoPedido:String):void
	setCodigoIntegracaoPlanejamento​(codigoIntegracaoPlanejamento:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setEstoqueItemAgrupamentoOriginal​(estoqueItemAgrupamentoOriginal:EstoqueItem):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdEstoqueItemAgrupamentoOriginal​(idEstoqueItemAgrupamentoOriginal:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdNegociacao​(idNegociacao:String):void
	setIdPedido​(idPedido:String):void
	setIdPlanejamento​(idPlanejamento:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setNegociacao​(negociacao:Negociacao):void
	setNomeExibicao​(nomeExibicao:String):void
	setPedido​(pedido:Pedido):void
	setPlanejamento​(planejamento:Planejamento):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setTipo​(tipo:TipoPlanejamentoEstoqueItem):void
	setValorTotalSolicitado​(valorTotalSolicitado:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace PlanejamentoEstoqueItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class PlanejamentoProduto {
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoPlanejamento():String
	getCodigoIntegracaoProduto():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getCodigoIntegracaoTipoEstoqueItem():String
	getIdMoedaOriginal():String
	getIdPlanejamento():String
	getIdProduto():String
	getIdTabelaPrecoItem():String
	getIdTipoEstoqueItem():String
	getMoedaOriginal():Moeda
	getNomeExibicao():String
	getPlanejamento():Planejamento
	getProduto():Produto
	getQuantidadeNegociacao():BigDecimal
	getQuantidadePedido():BigDecimal
	getQuantidadeSolicitada():BigDecimal
	getSituacao():SituacaoGeneric
	getTabelaPrecoItem():TabelaPrecoItem
	getTipoEstoqueItem():TipoEstoqueItem
	getValorTotalSolicitado():BigDecimal
	getValorUnitario():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoPlanejamento​(codigoIntegracaoPlanejamento:String):void
	setCodigoIntegracaoProduto​(codigoIntegracaoProduto:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setCodigoIntegracaoTipoEstoqueItem​(codigoIntegracaoTipoEstoqueItem:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdPlanejamento​(idPlanejamento:String):void
	setIdProduto​(idProduto:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setIdTipoEstoqueItem​(idTipoEstoqueItem:String):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setNomeExibicao​(nomeExibicao:String):void
	setPlanejamento​(planejamento:Planejamento):void
	setProduto​(produto:Produto):void
	setQuantidadeNegociacao​(quantidadeNegociacao:BigDecimal):void
	setQuantidadePedido​(quantidadePedido:BigDecimal):void
	setQuantidadeSolicitada​(quantidadeSolicitada:BigDecimal):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setTipoEstoqueItem​(tipoEstoqueItem:TipoEstoqueItem):void
	setValorTotalSolicitado​(valorTotalSolicitado:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	toString():String
}

export namespace PlanejamentoProduto.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export type Processo = Processo.static.Processo;
export namespace Processo.static {
	export interface Processo {}

	export const CARGA: Processo;
	export const ENVIO: Processo;
	export const INTEGRACAO: Processo;
}

export class Produto {
	getAcabamento():Acabamento
	getClassificacao():Classificacao
	getCodigoIntegracaoAcabamento():String
	getCodigoIntegracaoClassificacao():String
	getCodigoIntegracaoEspessura():String
	getCodigoIntegracaoMaterial():String
	getCodigoIntegracaoTipoProduto():String
	getEspessura():Espessura
	getEtiqueta():String
	getExibeLoja():Boolean
	getExtraLoja():String
	getIdAcabamento():String
	getIdClassificacao():String
	getIdEspessura():String
	getIdMaterial():String
	getIdTipoProduto():String
	getMaterial():Material
	getNome():String
	getSituacao():SituacaoGeneric
	getTipoProduto():TipoProduto
	getTraducao():String
	setAcabamento​(acabamento:Acabamento):void
	setClassificacao​(classificacao:Classificacao):void
	setCodigoIntegracaoAcabamento​(codigoIntegracaoAcabamento:String):void
	setCodigoIntegracaoClassificacao​(codigoIntegracaoClassificacao:String):void
	setCodigoIntegracaoEspessura​(codigoIntegracaoEspessura:String):void
	setCodigoIntegracaoMaterial​(codigoIntegracaoMaterial:String):void
	setCodigoIntegracaoTipoProduto​(codigoIntegracaoTipoProduto:String):void
	setEspessura​(espessura:Espessura):void
	setEtiqueta​(etiqueta:String):void
	setExibeLoja​(exibeLoja:Boolean):void
	setExtraLoja​(extraLoja:String):void
	setIdAcabamento​(idAcabamento:String):void
	setIdClassificacao​(idClassificacao:String):void
	setIdEspessura​(idEspessura:String):void
	setIdMaterial​(idMaterial:String):void
	setIdTipoProduto​(idTipoProduto:String):void
	setMaterial​(material:Material):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoProduto​(tipoProduto:TipoProduto):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace Produto.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class RegraIntegracao {
	getCronAgendamento():String
	getDataFimUltimaExecucao():DateTime
	getDataInicioUltimaExecucao():DateTime
	getDataProximaExecucao():DateTime
	getEntidade():String
	getExecutor():String
	getGrupoAgendamento():String
	getIdUsuario():String
	getRegra():String
	getSituacao():SituacaoGeneric
	getUsuario():Usuario
	setCronAgendamento​(cronAgendamento:String):void
	setDataFimUltimaExecucao​(dataFimUltimaExecucao:DateTime):void
	setDataInicioUltimaExecucao​(dataInicioUltimaExecucao:DateTime):void
	setDataProximaExecucao​(dataProximaExecucao:DateTime):void
	setEntidade​(entidade:String):void
	setExecutor​(executor:String):void
	setGrupoAgendamento​(grupoAgendamento:String):void
	setIdUsuario​(idUsuario:String):void
	setRegra​(regra:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace RegraIntegracao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Representante {
	getCodigoIntegracaoTipo():String
	getIdTipo():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTipo():Dominio
	setCodigoIntegracaoTipo​(codigoIntegracaoTipo:String):void
	setIdTipo​(idTipo:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipo​(tipo:Dominio):void
	toString():String
}

export namespace Representante.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class ReservaItem {
	getCliente():Cliente
	getCodigoEntidade():String
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoEntidade():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoMoedaConversao():String
	getCodigoIntegracaoMoedaOriginal():String
	getCodigoIntegracaoTabelaPrecoItem():String
	getCodigoIntegracaoVendedor():String
	getDataMinimaNotificacaoVencimento():DateTime
	getDataVencimento():DateTime
	getDeveDescontarQuantidadeDisponivel():Boolean
	getEntidade():EntidadeIntegracao
	getEntidadeOrigem():EntidadeIntegracao
	getIdCliente():String
	getIdEntidade():String
	getIdEntidadeOrigem():String
	getIdMoeda():String
	getIdMoedaConversao():String
	getIdMoedaOriginal():String
	getIdTabelaPrecoItem():String
	getIdVendedor():String
	getMoeda():Moeda
	getMoedaConversao():Moeda
	getMoedaOriginal():Moeda
	getOrigemReserva():OrigemReservaItem
	getQuantidadeDevolvida():BigDecimal
	getQuantidadeFaturada():BigDecimal
	getQuantidadeFaturadaNaoContabilizada():BigDecimal
	getSituacao():SituacaoReservaItem
	getTabelaPrecoItem():TabelaPrecoItem
	getValorImpostoDestacadoConvertido():BigDecimal
	getValorTotalConvertido():BigDecimal
	getValorUnitarioConvertido():BigDecimal
	getValorUnitarioOriginal():BigDecimal
	getVendedor():Usuario
	setCliente​(cliente:Cliente):void
	setCodigoEntidade​(codigoEntidade:String):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoEntidade​(codigoIntegracaoEntidade:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoMoedaConversao​(codigoIntegracaoMoedaConversao:String):void
	setCodigoIntegracaoMoedaOriginal​(codigoIntegracaoMoedaOriginal:String):void
	setCodigoIntegracaoTabelaPrecoItem​(codigoIntegracaoTabelaPrecoItem:String):void
	setCodigoIntegracaoVendedor​(codigoIntegracaoVendedor:String):void
	setDataMinimaNotificacaoVencimento​(dataMinimaNotificacaoVencimento:DateTime):void
	setDataVencimento​(dataVencimento:DateTime):void
	setDeveDescontarQuantidadeDisponivel​(deveDescontarQuantidadeDisponivel:Boolean):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setEntidadeOrigem​(entidadeOrigem:EntidadeIntegracao):void
	setIdCliente​(idCliente:String):void
	setIdEntidade​(idEntidade:String):void
	setIdEntidadeOrigem​(idEntidadeOrigem:String):void
	setIdMoeda​(idMoeda:String):void
	setIdMoedaConversao​(idMoedaConversao:String):void
	setIdMoedaOriginal​(idMoedaOriginal:String):void
	setIdTabelaPrecoItem​(idTabelaPrecoItem:String):void
	setIdVendedor​(idVendedor:String):void
	setMoeda​(moeda:Moeda):void
	setMoedaConversao​(moedaConversao:Moeda):void
	setMoedaOriginal​(moedaOriginal:Moeda):void
	setOrigemReserva​(origemReserva:OrigemReservaItem):void
	setQuantidadeDevolvida​(quantidadeDevolvida:BigDecimal):void
	setQuantidadeFaturada​(quantidadeFaturada:BigDecimal):void
	setQuantidadeFaturadaNaoContabilizada​(quantidadeFaturadaNaoContabilizada:BigDecimal):void
	setSituacao​(situacao:SituacaoReservaItem):void
	setTabelaPrecoItem​(tabelaPrecoItem:TabelaPrecoItem):void
	setValorImpostoDestacadoConvertido​(valorImpostoDestacadoConvertido:BigDecimal):void
	setValorTotalConvertido​(valorTotalConvertido:BigDecimal):void
	setValorUnitarioConvertido​(valorUnitarioConvertido:BigDecimal):void
	setValorUnitarioOriginal​(valorUnitarioOriginal:BigDecimal):void
	setVendedor​(vendedor:Usuario):void
	toString():String
}

export namespace ReservaItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export namespace RetornoIntegracao.static.Situacao {
	export interface RetornoIntegracao$Situacao {}

	export const ERRO: RetornoIntegracao$Situacao;
	export const ID_NAO_BATE_CODIGO_INTEGRACAO: RetornoIntegracao$Situacao;
	export const INVALIDO: RetornoIntegracao$Situacao;
	export const SUCESSO: RetornoIntegracao$Situacao;
}

export namespace RetornoIntegracao {
export type Situacao = RetornoIntegracao.static.Situacao.RetornoIntegracao$Situacao;
}

export class RetornoIntegracao {
	getCodigoIntegracao():String
	getDataInclusao():DateTime
	getEntidade():EntidadeIntegracao
	getId():String
	getMensagem():String
	getPendenteEnvio():Boolean
	getSituacao():RetornoIntegracao.Situacao
	setCodigoIntegracao​(codigoIntegracao:String):void
	setDataInclusao​(dataInclusao:DateTime):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setId​(id:String):void
	setMensagem​(mensagem:String):void
	setPendenteEnvio​(pendenteEnvio:Boolean):void
	setSituacao​(situacao:RetornoIntegracao.Situacao):void
	toString():String
}

export namespace RetornoIntegracao.static {
	export function erro​(entidade:EntidadeIntegracao, id:String, mensagem:String):RetornoIntegracao
	export function getStringSelectStatic​(campos:String, joins:String):String
	export function sucesso​(entidade:EntidadeIntegracao, id:String):RetornoIntegracao
}

export class Rotina {
	calcularItensCriticados​(retorno:ArrayList<RetornoIntegracao>):void
	getFimProcessamento():DateTime
	getInicioProcessamento():DateTime
	getItensCriticados():Integer
	getItensEnviados():Integer
	getNome():String
	getTempoProcessamento():Long
	setFimProcessamento​(fimProcessamento:DateTime):void
	setInicioProcessamento​(inicioProcessamento:DateTime):void
	setItensCriticados​(itensCriticados:Integer):void
	setItensEnviados​(itensEnviados:Integer):void
	setNome​(nome:String):void
}

export type SituacaoAtendimentoCliente = SituacaoAtendimentoCliente.static.SituacaoAtendimentoCliente;
export namespace SituacaoAtendimentoCliente.static {
	export interface SituacaoAtendimentoCliente {}

	export const AGENDADO: SituacaoAtendimentoCliente;
	export const CANCELADO: SituacaoAtendimentoCliente;
	export const REALIZADO: SituacaoAtendimentoCliente;
}

export type SituacaoBloqueioContato = SituacaoBloqueioContato.static.SituacaoBloqueioContato;
export namespace SituacaoBloqueioContato.static {
	export interface SituacaoBloqueioContato {}

	export const BOUNCE: SituacaoBloqueioContato;
	export const DESINSCRITO: SituacaoBloqueioContato;
	export const NENHUM: SituacaoBloqueioContato;
	export const SPAM: SituacaoBloqueioContato;
}

export type SituacaoCliente = SituacaoCliente.static.SituacaoCliente;
export namespace SituacaoCliente.static {
	export interface SituacaoCliente {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoCliente;
	export const ATIVO: SituacaoCliente;
	export const BLOQUEADO: SituacaoCliente;
	export const CANCELADO: SituacaoCliente;
	export const INATIVO: SituacaoCliente;
	export const PROSPECCAO: SituacaoCliente;
}

export type SituacaoCreditoCliente = SituacaoCreditoCliente.static.SituacaoCreditoCliente;
export namespace SituacaoCreditoCliente.static {
	export interface SituacaoCreditoCliente {}

	export const APROVADO: SituacaoCreditoCliente;
	export const CANCELADO: SituacaoCreditoCliente;
	export const REJEITADO: SituacaoCreditoCliente;
	export const REQUISITADO: SituacaoCreditoCliente;
	export const UTILIZADO: SituacaoCreditoCliente;
}

export type SituacaoEstoqueItem = SituacaoEstoqueItem.static.SituacaoEstoqueItem;
export namespace SituacaoEstoqueItem.static {
	export interface SituacaoEstoqueItem {}

	export const CANCELADO: SituacaoEstoqueItem;
	export const CONSIGNADO: SituacaoEstoqueItem;
	export const DISPONIVEL: SituacaoEstoqueItem;
	export const EM_PEDIDO: SituacaoEstoqueItem;
	export const RESERVADO: SituacaoEstoqueItem;
	export const VENDIDO: SituacaoEstoqueItem;
}

export type SituacaoGeneric = SituacaoGeneric.static.SituacaoGeneric;
export namespace SituacaoGeneric.static {
	export interface SituacaoGeneric {}

	export const ATIVO: SituacaoGeneric;
	export const CANCELADO: SituacaoGeneric;
	export const INATIVO: SituacaoGeneric;
}

export class SituacaoIntegracaoTela {
	getEntidade():EntidadeIntegracao
	getNecessitaIntegracao():Boolean
	getNome():String
	getPadrao():Boolean
	getPermiteEdicao():Boolean
	getSituacao():SituacaoGeneric
	setEntidade​(entidade:EntidadeIntegracao):void
	setNecessitaIntegracao​(necessitaIntegracao:Boolean):void
	setNome​(nome:String):void
	setPadrao​(padrao:Boolean):void
	setPermiteEdicao​(permiteEdicao:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace SituacaoIntegracaoTela.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export type SituacaoOferta = SituacaoOferta.static.SituacaoOferta;
export namespace SituacaoOferta.static {
	export interface SituacaoOferta {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoOferta;
	export const ATIVA: SituacaoOferta;
	export const CANCELADA: SituacaoOferta;
	export const VENCIDA: SituacaoOferta;
}

export type SituacaoPendenciaCliente = SituacaoPendenciaCliente.static.SituacaoPendenciaCliente;
export namespace SituacaoPendenciaCliente.static {
	export interface SituacaoPendenciaCliente {}

	export const ARQUIVADA: SituacaoPendenciaCliente;
	export const ATIVA: SituacaoPendenciaCliente;
	export const CANCELADA: SituacaoPendenciaCliente;
}

export type SituacaoReservaItem = SituacaoReservaItem.static.SituacaoReservaItem;
export namespace SituacaoReservaItem.static {
	export interface SituacaoReservaItem {}

	export const ATIVA: SituacaoReservaItem;
	export const CANCELADA_CLIENTE: SituacaoReservaItem;
	export const CANCELADA_VENDEDOR: SituacaoReservaItem;
	export const CONCLUIDA: SituacaoReservaItem;
	export const CONCLUIDA_INTEGRACAO: SituacaoReservaItem;
	export const VENCIDA: SituacaoReservaItem;
}

export type SituacaoTituloVenda = SituacaoTituloVenda.static.SituacaoTituloVenda;
export namespace SituacaoTituloVenda.static {
	export interface SituacaoTituloVenda {}

	export const ABERTO: SituacaoTituloVenda;
	export const ABERTO_PARCIAL: SituacaoTituloVenda;
	export const CANCELADO: SituacaoTituloVenda;
	export const LIQUIDADO: SituacaoTituloVenda;
}

export class Sugestao {
	getCliente():Cliente
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoDominio():String
	getCodigoIntegracaoEntidade():String
	getDominio():Dominio
	getIdCliente():String
	getIdDominio():String
	getIdEntidade():String
	getRelevancia():BigDecimal
	getSituacao():SituacaoGeneric
	getTipo():String
	getValor():String
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoDominio​(codigoIntegracaoDominio:String):void
	setCodigoIntegracaoEntidade​(codigoIntegracaoEntidade:String):void
	setDominio​(dominio:Dominio):void
	setIdCliente​(idCliente:String):void
	setIdDominio​(idDominio:String):void
	setIdEntidade​(idEntidade:String):void
	setRelevancia​(relevancia:BigDecimal):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipo​(tipo:String):void
	setValor​(valor:String):void
	toString():String
}

export namespace Sugestao.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TabelaPreco {
	getNome():String
	getPublico():Boolean
	getSituacao():SituacaoGeneric
	setNome​(nome:String):void
	setPublico​(publico:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace TabelaPreco.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TabelaPrecoItem {
	getCodigoIntegracaoEstoqueItem():String
	getCodigoIntegracaoMoeda():String
	getCodigoIntegracaoProduto():String
	getCodigoIntegracaoTabelaPreco():String
	getEstoqueItem():EstoqueItem
	getIdEstoqueItem():String
	getIdMoeda():String
	getIdProduto():String
	getIdTabelaPreco():String
	getMoeda():Moeda
	getPercentualComissao():BigDecimal
	getPercentualImpostoDestacado():BigDecimal
	getProduto():Produto
	getSituacao():SituacaoGeneric
	getTabelaPreco():TabelaPreco
	getTipoTabelaPrecoItem():TipoTabelaPrecoItem
	getValorMinimo():BigDecimal
	getValorUnitario():BigDecimal
	setCodigoIntegracaoEstoqueItem​(codigoIntegracaoEstoqueItem:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setCodigoIntegracaoProduto​(codigoIntegracaoProduto:String):void
	setCodigoIntegracaoTabelaPreco​(codigoIntegracaoTabelaPreco:String):void
	setEstoqueItem​(estoqueItem:EstoqueItem):void
	setIdEstoqueItem​(idEstoqueItem:String):void
	setIdMoeda​(idMoeda:String):void
	setIdProduto​(idProduto:String):void
	setIdTabelaPreco​(idTabelaPreco:String):void
	setMoeda​(moeda:Moeda):void
	setPercentualComissao​(percentualComissao:BigDecimal):void
	setPercentualImpostoDestacado​(percentualImpostoDestacado:BigDecimal):void
	setProduto​(produto:Produto):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTabelaPreco​(tabelaPreco:TabelaPreco):void
	setTipoTabelaPrecoItem​(tipoTabelaPrecoItem:TipoTabelaPrecoItem):void
	setValorMinimo​(valorMinimo:BigDecimal):void
	setValorUnitario​(valorUnitario:BigDecimal):void
	toString():String
}

export namespace TabelaPrecoItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class Tag {
	getEntidade():EntidadeIntegracao
	getIntegravel():Boolean
	getKeyText():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTipoEntidade():String
	setEntidade​(entidade:EntidadeIntegracao):void
	setIntegravel​(integravel:Boolean):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoEntidade​(tipoEntidade:String):void
	toString():String
}

export namespace Tag.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export interface TagInterface {
	getMetadados():String
	setMetadados​(metadado:String):void
}

export class Tarefa {
	getCampanha():Campanha
	getCodigoIntegracaoCampanha():String
	getCodigoIntegracaoEntidade():String
	getCodigoIntegracaoFase():String
	getCodigoIntegracaoTipo():String
	getCodigoIntegracaoUsuario():String
	getDataFechamento():DateTime
	getDataLembrete():DateTime
	getEntidade():EntidadeIntegracao
	getFase():FaseTarefa
	getIdCampanha():String
	getIdEntidade():String
	getIdFase():String
	getIdTipo():String
	getIdUsuario():String
	getNome():String
	getSituacao():SituacaoTarefa
	getTexto():String
	getTipo():TipoTarefa
	getUsuario():Usuario
	setCampanha​(campanha:Campanha):void
	setCodigoIntegracaoCampanha​(codigoIntegracaoCampanha:String):void
	setCodigoIntegracaoEntidade​(codigoIntegracaoEntidade:String):void
	setCodigoIntegracaoFase​(codigoIntegracaoFase:String):void
	setCodigoIntegracaoTipo​(codigoIntegracaoTipo:String):void
	setCodigoIntegracaoUsuario​(codigoIntegracaoUsuario:String):void
	setDataFechamento​(dataFechamento:DateTime):void
	setDataLembrete​(dataLembrete:DateTime):void
	setEntidade​(entidade:EntidadeIntegracao):void
	setFase​(fase:FaseTarefa):void
	setIdCampanha​(idCampanha:String):void
	setIdEntidade​(idEntidade:String):void
	setIdFase​(idFase:String):void
	setIdTipo​(idTipo:String):void
	setIdUsuario​(idUsuario:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoTarefa):void
	setTexto​(texto:String):void
	setTipo​(tipo:TipoTarefa):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace Tarefa.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoCliente {
	getNome():String
	getSituacao():SituacaoGeneric
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace TipoCliente.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoCustomForm {
	getConfiguracao():String
	getNome():String
	getSituacao():SituacaoGeneric
	setConfiguracao​(configuracao:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace TipoCustomForm.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoEstoqueItem {
	getConfiguracao():String
	getContabilizaFaturamento():Boolean
	getContabilizaFilho():Boolean
	getContabilizaPai():Boolean
	getExibeLoja():Boolean
	getExibicaoVisual():TipoEstoqueItemExibicaoVisual
	getFatorFracionado():BigDecimal
	getIdTipoEstoqueItemAgrupamento():String
	getIdTipoEstoqueItemOrigem():String
	getIdTipoProduto():String
	getInformaClienteVendedorEstoqueItem():Boolean
	getNome():String
	getNomeUrl():String
	getPermiteAlterarMedidasVenda():Boolean
	getSituacao():SituacaoGeneric
	getTipoCalculoQuantidade():TipoEstoqueItemTipoCalculoQuantidade
	getTipoEstoqueItemAgrupamento():TipoEstoqueItem
	getTipoEstoqueItemOrigem():TipoEstoqueItem
	getTipoProduto():TipoProduto
	getTraducao():String
	getTraducaoPlural():String
	getUtilizaMedidaBrutaLiquida():Boolean
	getUtilizaPesoBrutoLiquido():Boolean
	setConfiguracao​(configuracao:String):void
	setContabilizaFaturamento​(contabilizaFaturamento:Boolean):void
	setContabilizaFilho​(contabilizaFilho:Boolean):void
	setContabilizaPai​(contabilizaPai:Boolean):void
	setExibeLoja​(exibeLoja:Boolean):void
	setExibicaoVisual​(exibicaoVisual:TipoEstoqueItemExibicaoVisual):void
	setFatorFracionado​(fatorFracionado:BigDecimal):void
	setIdTipoEstoqueItemAgrupamento​(idTipoEstoqueItemAgrupamento:String):void
	setIdTipoEstoqueItemOrigem​(idTipoEstoqueItemOrigem:String):void
	setIdTipoProduto​(idTipoProduto:String):void
	setInformaClienteVendedorEstoqueItem​(informaClienteVendedorEstoqueItem:Boolean):void
	setNome​(nome:String):void
	setNomeUrl​(nomeUrl:String):void
	setPermiteAlterarMedidasVenda​(permiteAlterarMedidasVenda:Boolean):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoCalculoQuantidade​(tipoCalculoQuantidade:TipoEstoqueItemTipoCalculoQuantidade):void
	setTipoEstoqueItemAgrupamento​(tipoEstoqueItemAgrupamento:TipoEstoqueItem):void
	setTipoEstoqueItemOrigem​(tipoEstoqueItemOrigem:TipoEstoqueItem):void
	setTipoProduto​(tipoProduto:TipoProduto):void
	setTraducao​(traducao:String):void
	setTraducaoPlural​(traducaoPlural:String):void
	setUtilizaMedidaBrutaLiquida​(utilizaMedidaBrutaLiquida:Boolean):void
	setUtilizaPesoBrutoLiquido​(utilizaPesoBrutoLiquido:Boolean):void
	toString():String
}

export namespace TipoEstoqueItem.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoFrete {
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace TipoFrete.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoMaterial {
	getExibeLoja():Boolean
	getKeyText():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTraducao():String
	setExibeLoja​(exibeLoja:Boolean):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTraducao​(traducao:String):void
	toString():String
}

export namespace TipoMaterial.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoProduto {
	getConfiguracao():String
	getKeyText():String
	getNome():String
	getSituacao():SituacaoGeneric
	getTipoCalculoValor():TipoProdutoTipoCalculoValor
	getTipoMetragem():TipoProdutoTipoMetragem
	getTraducao():String
	getTraducaoPlural():String
	getUtilizaAcabamento():Boolean
	getUtilizaClassificacao():Boolean
	getUtilizaEspessura():Boolean
	getUtilizaMaterial():Boolean
	setConfiguracao​(configuracao:String):void
	setKey​(key:String):void
	setKeyText​(keyText:String):void
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setTipoCalculoValor​(tipoCalculoValor:TipoProdutoTipoCalculoValor):void
	setTipoMetragem​(tipoMetragem:TipoProdutoTipoMetragem):void
	setTraducao​(traducao:String):void
	setTraducaoPlural​(traducaoPlural:String):void
	setUtilizaAcabamento​(utilizaAcabamento:Boolean):void
	setUtilizaClassificacao​(utilizaClassificacao:Boolean):void
	setUtilizaEspessura​(utilizaEspessura:Boolean):void
	setUtilizaMaterial​(utilizaMaterial:Boolean):void
	toString():String
}

export namespace TipoProduto.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoTarefa {
	getNome():String
	getSituacao():SituacaoGeneric
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace TipoTarefa.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TipoVenda {
	getNome():String
	getSituacao():SituacaoGeneric
	setNome​(nome:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	toString():String
}

export namespace TipoVenda.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class TituloVenda {
	calcularSituacao():SituacaoTituloVenda
	getCliente():Cliente
	getCodigoIntegracaoCliente():String
	getCodigoIntegracaoMoeda():String
	getDataEmissao():DateTime
	getDataLembrete():DateTime
	getDataLiquidacao():DateTime
	getDataPrevisao():DateTime
	getIdCliente():String
	getIdMoeda():String
	getMoeda():Moeda
	getNome():String
	getObservacao():String
	getSituacao():SituacaoTituloVenda
	getValorAberto():BigDecimal
	getValorOriginal():BigDecimal
	getValorRecebido():BigDecimal
	setCliente​(cliente:Cliente):void
	setCodigoIntegracaoCliente​(codigoIntegracaoCliente:String):void
	setCodigoIntegracaoMoeda​(codigoIntegracaoMoeda:String):void
	setDataEmissao​(dataEmissao:DateTime):void
	setDataLembrete​(dataLembrete:DateTime):void
	setDataLiquidacao​(dataLiquidacao:DateTime):void
	setDataPrevisao​(dataPrevisao:DateTime):void
	setIdCliente​(idCliente:String):void
	setIdMoeda​(idMoeda:String):void
	setMoeda​(moeda:Moeda):void
	setNome​(nome:String):void
	setObservacao​(observacao:String):void
	setSituacao​(situacao:SituacaoTituloVenda):void
	setValorAberto​(valorAberto:BigDecimal):void
	setValorOriginal​(valorOriginal:BigDecimal):void
	setValorRecebido​(valorRecebido:BigDecimal):void
	toString():String
}

export namespace TituloVenda.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export interface TraducaoInterface {
	getTraducao():String
	setTraducao​(traducao:String):void
}

export class Usuario {
	getEmail():String
	getIntegrador():Boolean
	getMaster():Boolean
	getNome():String
	getSenha():String
	getSituacao():SituacaoGeneric
	getSituacaoIntegracao():SituacaoIntegracao
	getUsername():String
	setEmail​(email:String):void
	setIntegrador​(integrador:Boolean):void
	setMaster​(master:Boolean):void
	setNome​(nome:String):void
	setSenha​(senha:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setSituacaoIntegracao​(situacaoIntegracao:SituacaoIntegracao):void
	setUsername​(username:String):void
	toString():String
}

export namespace Usuario.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class UsuarioEmpresa {
	getAdministrador():Boolean
	getBannerLoja():String
	getGrupoUsuarioPadrao():GrupoUsuario
	getIdGrupoUsuarioPadrao():String
	getIdUsuario():String
	getSituacao():SituacaoGeneric
	getUsuario():Usuario
	setAdministrador​(administrador:Boolean):void
	setBannerLoja​(bannerLoja:String):void
	setGrupoUsuarioPadrao​(grupoUsuarioPadrao:GrupoUsuario):void
	setIdGrupoUsuarioPadrao​(idGrupoUsuarioPadrao:String):void
	setIdUsuario​(idUsuario:String):void
	setSituacao​(situacao:SituacaoGeneric):void
	setUsuario​(usuario:Usuario):void
	toString():String
}

export namespace UsuarioEmpresa.static {
	export function getStringSelectStatic​(campos:String, joins:String):String
}

export class ConfiguracaoAcabamento {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarCodigo():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarNome():Boolean
	getIntegrarTraducao():Boolean
	getLimiteEnvioClient():Long
	getOrdenacao():String
	toString():String
}

export class ConfiguracaoAnexo {
	getEfetuarCarga():Boolean
	getManterInversoAoSubstituir():Boolean
	getSubstituirAnexoExistente():Boolean
	getTamanhoMaximo():Long
	toString():String
}

export class ConfiguracaoBody {
	getAcabamento():ConfiguracaoAcabamento
	getAnexo():ConfiguracaoAnexo
	getCampanha():ConfiguracaoCampanha
	getCarga():ConfiguracaoCarga
	getCategoria():ConfiguracaoCategoria
	getCategoriaHomeLoja():ConfiguracaoCategoriaHomeLoja
	getCategoriaHomeLojaCategoria():ConfiguracaoCategoriaHomeLojaCategoria
	getCategoriaHomeLojaEstoqueItem():ConfiguracaoCategoriaHomeLojaEstoqueItem
	getCategoriaProduto():ConfiguracaoCategoriaProduto
	getClassificacao():ConfiguracaoClassificacao
	getCliente():ConfiguracaoCliente
	getComentario():ConfiguracaoComentario
	getContato():ConfiguracaoContato
	getCotacaoMoeda():ConfiguracaoCotacaoMoeda
	getCustomForm():ConfiguracaoCustomForm
	getDeposito():ConfiguracaoDeposito
	getEndereco():ConfiguracaoEndereco
	getEspessura():ConfiguracaoEspessura
	getEstoqueItem():ConfiguracaoEstoqueItem
	getFaturamento():ConfiguracaoFaturamento
	getGrupoCliente():ConfiguracaoGrupoCliente
	getGrupoClienteEstoqueItem():ConfiguracaoGrupoClienteEstoqueItem
	getGrupoUsuario():ConfiguracaoGrupoUsuario
	getInspecao():ConfiguracaoInspecao
	getMaterial():ConfiguracaoMaterial
	getNegociacao():ConfiguracaoNegociacao
	getOferta():ConfiguracaoOferta
	getOfertaCliente():ConfiguracaoOfertaCliente
	getOfertaClienteContato():ConfiguracaoOfertaClienteContato
	getOfertaItem():ConfiguracaoOfertaItem
	getOfertaRejeicao():ConfiguracaoOfertaRejeicao
	getPedido():ConfiguracaoPedido
	getPendencia():ConfiguracaoPendencia
	getPlanejamento():ConfiguracaoPlanejamento
	getProduto():ConfiguracaoProduto
	getReservaItem():ConfiguracaoReservaItem
	getRotina():ConfiguracaoRotina
	getSugestao():ConfiguracaoSugestao
	getTabelaPreco():ConfiguracaoTabelaPreco
	getTabelaPrecoItem():ConfiguracaoTabelaPrecoItem
	getTarefa():ConfiguracaoTarefa
	getTipoEstoqueItem():ConfiguracaoTipoEstoqueItem
	getTipoMaterial():ConfiguracaoTipoMaterial
	getTituloVenda():ConfiguracaoTituloVenda
	getUsuario():ConfiguracaoUsuario
	toString():String
}

export class ConfiguracaoCampanha {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoCarga {
	getExecutarCargaAcabamento():Boolean
	getExecutarCargaAnexo():Boolean
	getExecutarCargaCampanha():Boolean
	getExecutarCargaCategoria():Boolean
	getExecutarCargaCategoriaHomeLoja():Boolean
	getExecutarCargaCategoriaHomeLojaCategoria():Boolean
	getExecutarCargaCategoriaHomeLojaEstoqueItem():Boolean
	getExecutarCargaCategoriaProduto():Boolean
	getExecutarCargaClassificacao():Boolean
	getExecutarCargaCliente():Boolean
	getExecutarCargaComentario():Boolean
	getExecutarCargaCondicaoPagamento():Boolean
	getExecutarCargaContato():Boolean
	getExecutarCargaCor():Boolean
	getExecutarCargaCotacaoMoeda():Boolean
	getExecutarCargaCreditoCliente():Boolean
	getExecutarCargaCustomForm():Boolean
	getExecutarCargaCustomFormItem():Boolean
	getExecutarCargaDeposito():Boolean
	getExecutarCargaEndereco():Boolean
	getExecutarCargaEspessura():Boolean
	getExecutarCargaEstoqueItem():Boolean
	getExecutarCargaFaturamento():Boolean
	getExecutarCargaFaturamentoItem():Boolean
	getExecutarCargaFormaPagamento():Boolean
	getExecutarCargaFornecedor():Boolean
	getExecutarCargaGrupoCliente():Boolean
	getExecutarCargaGrupoClienteEstoqueItem():Boolean
	getExecutarCargaInspecao():Boolean
	getExecutarCargaInspecaoItem():Boolean
	getExecutarCargaMaterial():Boolean
	getExecutarCargaMetadado():Boolean
	getExecutarCargaMoeda():Boolean
	getExecutarCargaNegociacao():Boolean
	getExecutarCargaNegociacaoItem():Boolean
	getExecutarCargaOferta():Boolean
	getExecutarCargaOfertaCliente():Boolean
	getExecutarCargaOfertaClienteContato():Boolean
	getExecutarCargaOfertaItem():Boolean
	getExecutarCargaOfertaRejeicao():Boolean
	getExecutarCargaOportunidade():Boolean
	getExecutarCargaOportunidadeProduto():Boolean
	getExecutarCargaOrdemCompra():Boolean
	getExecutarCargaPais():Boolean
	getExecutarCargaPedido():Boolean
	getExecutarCargaPedidoItem():Boolean
	getExecutarCargaPendencia():Boolean
	getExecutarCargaPlanejamento():Boolean
	getExecutarCargaPlanejamentoEstoqueItem():Boolean
	getExecutarCargaPlanejamentoProduto():Boolean
	getExecutarCargaProduto():Boolean
	getExecutarCargaRepresentante():Boolean
	getExecutarCargaReservaItem():Boolean
	getExecutarCargaSugestao():Boolean
	getExecutarCargaTabelaPreco():Boolean
	getExecutarCargaTabelaPrecoItem():Boolean
	getExecutarCargaTag():Boolean
	getExecutarCargaTarefa():Boolean
	getExecutarCargaTipoFrete():Boolean
	getExecutarCargaTipoMaterial():Boolean
	getExecutarCargaTituloVenda():Boolean
	toString():String
}

export class ConfiguracaoCategoria {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarExtraLoja():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoCategoriaHomeLoja {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoCategoriaHomeLojaCategoria {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoCategoriaHomeLojaEstoqueItem {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoCategoriaProduto {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoClassificacao {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarCodigo():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarNome():Boolean
	getIntegrarTraducao():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoCliente {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarBannerHomeLoja():Boolean
	getIntegrarCondicaoPagamento():Boolean
	getIntegrarEnderecoPrincipal():Boolean
	getIntegrarExtraLoja():Boolean
	getIntegrarFormaPagamento():Boolean
	getIntegrarGrupoCliente():Boolean
	getIntegrarGrupoUsuario():Boolean
	getIntegrarNome():Boolean
	getIntegrarRepresentante():Boolean
	getIntegrarSituacao():Boolean
	getIntegrarSituacaoUsuario():Boolean
	getIntegrarTipo():Boolean
	getIntegrarVendedor():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoComentario {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoContato {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIgnorarIntegracaoNomeEnvio():Boolean
	getIntegrarGrupoUsuario():Boolean
	getIntegrarSituacao():Boolean
	getLimiteEnvioClient():Long
	getOrdenacao():String
	toString():String
}

export class ConfiguracaoCotacaoMoeda {
	getEnviarParaClient():Boolean
	getIntegrarGrupoUsuario():Boolean
	toString():String
}

export class ConfiguracaoCustomForm {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoDeposito {
	getIntegrarCodigo():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarNome():Boolean
	toString():String
}

export class ConfiguracaoEndereco {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoEspessura {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarCodigo():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarNome():Boolean
	getIntegrarTraducao():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoEstoqueItem {
	get​(tipo:String):ConfiguracaoEstoqueItemPorTipo
	getAll():ArrayList<Map.Entry<String,​ConfiguracaoEstoqueItemPorTipo>>
	getOrdem():String[]
	getTipos():HashMap<String,​ConfiguracaoEstoqueItemPorTipo>
	toString():String
}

export class ConfiguracaoEstoqueItemPorTipo {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarDataEntradaEstoque():Boolean
	getIntegrarDeposito():Boolean
	getIntegrarExtraLoja():Boolean
	getIntegrarGrupoUsuario():Boolean
	getIntegrarLocalizacao():Boolean
	getIntegrarMoedaValorTotalCusto():Boolean
	getIntegrarObservacao():Boolean
	getIntegrarProduto():Boolean
	getIntegrarValorTotalCusto():Boolean
	getLimiteEnvioClient():Long
	getManterQuantidadeEstoqueEmEstoqueSeExistirReservaAtiva():Boolean
	getOrdenacao():String
	getRetirarDoEstoqueItemInexistentesNoClient():Boolean
	getRetirarDoEstoqueQuandoReservaConcluir():Boolean
	toString():String
}

export class ConfiguracaoFaturamento {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoGrupoCliente {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoGrupoClienteEstoqueItem {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoGrupoUsuario {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoHeader {
	getAcceptLanguage():String
	getIdentificadorLogin():String
	getIdUsuarioIntegracao():String
	getPaginacaoCarga():Long
	getPaginacaoEnvio():Integer
	getPrefixoRotina():String
	getQuantidadeThreadsCarga():Integer
	getQuantidadeThreadsEnvio():Integer
	getSalvarSaida():Boolean
	getUrlAnexoMobgran():String
	getUrlMobgran():String
	getVersao():String
	setPaginacaoEnvio​(paginacaoEnvio:Integer):void
	setQuantidadeThreadsEnvio​(quantidadeThreadsEnvio:Integer):void
	setUrlAnexoMobgran​(urlAnexoMobgran:String):void
	setUrlMobgran​(urlMobgran:String):void
	setVersao​(versao:String):void
	toString():String
}

export class ConfiguracaoInspecao {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoMaterial {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarCodigo():Boolean
	getIntegrarCor():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarExtraLoja():Boolean
	getIntegrarNome():Boolean
	getIntegrarTipoMaterial():Boolean
	getIntegrarTraducao():Boolean
	getLimiteEnvioClient():Long
	getOrdenacao():String
	toString():String
}

export class ConfiguracaoNegociacao {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoOferta {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoOfertaCliente {
	getEnviarParaClient():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoOfertaClienteContato {
	getEnviarParaClient():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoOfertaItem {
	getBaixarApenasAtivosPrimeiraCarga():Boolean
	getEnviarParaClient():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoOfertaRejeicao {
	getEnviarParaClient():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoPedido {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIdSituacaoIntegracaoIntegrado():String
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoPendencia {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoPlanejamento {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoProduto {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarCodigo():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarExtraLoja():Boolean
	getIntegrarMaterial():Boolean
	getIntegrarNome():Boolean
	getIntegrarTraducao():Boolean
	getLimiteEnvioClient():Long
	getOrdenacao():String
	toString():String
}

export class ConfiguracaoReservaItem {
	getBaixarApenasAtivosPrimeiraCarga():Boolean
	getCriticarQuandoEstoqueItemSemQuantidadeDisponivel():Boolean
	getDeveDescontarQuantidadeDisponivel():Boolean
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIdClientePadrao():String
	getIdUsuarioPadrao():String
	getLimiteEnvioClient():Long
	setBaixarApenasAtivosPrimeiraCarga​(baixarApenasAtivosPrimeiraCarga:Boolean):void
	setCriticarQuandoEstoqueItemSemQuantidadeDisponivel​(criticarQuandoEstoqueItemSemQuantidadeDisponivel:Boolean):void
	setDeveDescontarQuantidadeDisponivel​(deveDescontarQuantidadeDisponivel:Boolean):void
	setEnviarParaClient​(enviarParaClient:Boolean):void
	setEnviarParaClientNaPrimeiraExecucaoLimpa​(enviarParaClientNaPrimeiraExecucaoLimpa:Boolean):void
	setIdClientePadrao​(idClientePadrao:String):void
	setIdUsuarioPadrao​(idUsuarioPadrao:String):void
	setLimiteEnvioClient​(limiteEnvioClient:Long):void
	toString():String
}

export class ConfiguracaoRotina {
	getExecutarEnvio():Boolean
	getExecutarEnvioAcabamento():Boolean
	getExecutarEnvioAnexo():Boolean
	getExecutarEnvioCategoria():Boolean
	getExecutarEnvioCategoriaHomeLoja():Boolean
	getExecutarEnvioCategoriaHomeLojaCategoria():Boolean
	getExecutarEnvioCategoriaHomeLojaEstoqueItem():Boolean
	getExecutarEnvioCategoriaProduto():Boolean
	getExecutarEnvioClassificacao():Boolean
	getExecutarEnvioCliente():Boolean
	getExecutarEnvioComentario():Boolean
	getExecutarEnvioCondicaoPagamento():Boolean
	getExecutarEnvioContato():Boolean
	getExecutarEnvioCor():Boolean
	getExecutarEnvioCotacaoMoeda():Boolean
	getExecutarEnvioDeposito():Boolean
	getExecutarEnvioEndereco():Boolean
	getExecutarEnvioEspessura():Boolean
	getExecutarEnvioEstoqueItem():Boolean
	getExecutarEnvioFaturamento():Boolean
	getExecutarEnvioFormaPagamento():Boolean
	getExecutarEnvioFornecedor():Boolean
	getExecutarEnvioGrupoCliente():Boolean
	getExecutarEnvioGrupoClienteEstoqueItem():Boolean
	getExecutarEnvioInspecao():Boolean
	getExecutarEnvioMaterial():Boolean
	getExecutarEnvioMetadado():Boolean
	getExecutarEnvioMoeda():Boolean
	getExecutarEnvioOrdemCompra():Boolean
	getExecutarEnvioPais():Boolean
	getExecutarEnvioPedido():Boolean
	getExecutarEnvioPendencia():Boolean
	getExecutarEnvioProduto():Boolean
	getExecutarEnvioRepresentante():Boolean
	getExecutarEnvioReservaItem():Boolean
	getExecutarEnvioSugestao():Boolean
	getExecutarEnvioTabelaPreco():Boolean
	getExecutarEnvioTabelaPrecoItem():Boolean
	getExecutarEnvioTag():Boolean
	getExecutarEnvioTarefa():Boolean
	getExecutarEnvioTipoFrete():Boolean
	getExecutarEnvioTipoMaterial():Boolean
	getExecutarEnvioTituloVenda():Boolean
	toString():String
}

export class ConfiguracaoSugestao {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarGrupoUsuario():Boolean
	getIntegrarSituacao():Boolean
	getLimiteEnvioClient():Long
	getOrdenacao():String
	toString():String
}

export class ConfiguracaoTabelaPreco {
	getEnviarParaClient():Boolean
	getInativarInexistentes():Boolean
	getIntegrarGrupoUsuario():Boolean
	getIntegrarNome():Boolean
	toString():String
}

export namespace ConfiguracaoTabelaPrecoItem.static.ComportamentoTabelaPrecoItemNaoEncontrado {
	export interface ConfiguracaoTabelaPrecoItem$ComportamentoTabelaPrecoItemNaoEncontrado {}

	export const IGNORAR: ConfiguracaoTabelaPrecoItem$ComportamentoTabelaPrecoItemNaoEncontrado;
	export const INATIVAR: ConfiguracaoTabelaPrecoItem$ComportamentoTabelaPrecoItemNaoEncontrado;
}

export namespace ConfiguracaoTabelaPrecoItem {
export type ComportamentoTabelaPrecoItemNaoEncontrado = ConfiguracaoTabelaPrecoItem.static.ComportamentoTabelaPrecoItemNaoEncontrado.ConfiguracaoTabelaPrecoItem$ComportamentoTabelaPrecoItemNaoEncontrado;
}

export class ConfiguracaoTabelaPrecoItem {
	getComportamentoTabelaPrecoItemNaoEncontrado():ConfiguracaoTabelaPrecoItem.ComportamentoTabelaPrecoItemNaoEncontrado
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getIntegrarGrupoUsuario():Boolean
	getItensInativadosPorExecucao():Integer
	toString():String
}

export class ConfiguracaoTarefa {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoTipoEstoqueItem {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export class ConfiguracaoTipoMaterial {
	getIntegrarCodigo():Boolean
	getIntegrarExibeLoja():Boolean
	getIntegrarNome():Boolean
	getIntegrarTraducao():Boolean
	toString():String
}

export namespace ConfiguracaoTituloVenda.static.ComportamentoTituloNaoEncontrado {
	export interface ConfiguracaoTituloVenda$ComportamentoTituloNaoEncontrado {}

	export const CANCELAR: ConfiguracaoTituloVenda$ComportamentoTituloNaoEncontrado;
	export const LIQUIDAR: ConfiguracaoTituloVenda$ComportamentoTituloNaoEncontrado;
}

export namespace ConfiguracaoTituloVenda {
export type ComportamentoTituloNaoEncontrado = ConfiguracaoTituloVenda.static.ComportamentoTituloNaoEncontrado.ConfiguracaoTituloVenda$ComportamentoTituloNaoEncontrado;
}

export class ConfiguracaoTituloVenda {
	getComportamentoTituloNaoEncontrado():ConfiguracaoTituloVenda.ComportamentoTituloNaoEncontrado
	toString():String
}

export class ConfiguracaoUsuario {
	getEnviarParaClient():Boolean
	getEnviarParaClientNaPrimeiraExecucaoLimpa():Boolean
	getLimiteEnvioClient():Long
	toString():String
}

export type AnexoTipo = AnexoTipo.static.AnexoTipo;
export namespace AnexoTipo.static {
	export interface AnexoTipo {}

	export const ACABAMENTO: AnexoTipo;
	export const AJUDA: AnexoTipo;
	export const ATENDIMENTO_CLIENTE: AnexoTipo;
	export const CAMPANHA: AnexoTipo;
	export const CATEGORIA: AnexoTipo;
	export const CLASSIFICACAO: AnexoTipo;
	export const CLIENTE: AnexoTipo;
	export const COMUNICACAO: AnexoTipo;
	export const COMUNICACAO_REGISTRO: AnexoTipo;
	export const COMUNICACAO_REGISTRO_THREAD: AnexoTipo;
	export const CONTATO: AnexoTipo;
	export const COR: AnexoTipo;
	export const CREDITO_CLIENTE: AnexoTipo;
	export const CUSTOM_FORM: AnexoTipo;
	export const CUSTOM_FORM_ITEM: AnexoTipo;
	export const DEPOSITO: AnexoTipo;
	export const DOMINIO: AnexoTipo;
	export const ENDERECO: AnexoTipo;
	export const ESPESSURA: AnexoTipo;
	export const ESTOQUE_ITEM: AnexoTipo;
	export const ESTOQUE_ITEM_APLICACAO: AnexoTipo;
	export const ESTOQUE_ITEM_PADRAO_PARA_APLICACAO: AnexoTipo;
	export const FATURAMENTO: AnexoTipo;
	export const FORNECEDOR: AnexoTipo;
	export const FUNDO_CONFERENCIA: AnexoTipo;
	export const GRUPO_USUARIO: AnexoTipo;
	export const GRUPO_USUARIO_USUARIO: AnexoTipo;
	export const INSPECAO: AnexoTipo;
	export const INSPECAO_ITEM: AnexoTipo;
	export const ITEM_SEM_IMAGEM: AnexoTipo;
	export const LOGO_AREA_CLIENTE_COMPLETA: AnexoTipo;
	export const LOGO_AREA_CLIENTE_FIGURA: AnexoTipo;
	export const MATERIAL: AnexoTipo;
	export const MATERIAL_APLICACAO: AnexoTipo;
	export const MATERIAL_PADRAO_PARA_APLICACAO: AnexoTipo;
	export const METADADO: AnexoTipo;
	export const NEGOCIACAO: AnexoTipo;
	export const OFERTA: AnexoTipo;
	export const OPORTUNIDADE: AnexoTipo;
	export const OPORTUNIDADE_PRODUTO: AnexoTipo;
	export const ORDEM_COMPRA: AnexoTipo;
	export const PAIS: AnexoTipo;
	export const PEDIDO: AnexoTipo;
	export const PLANEJAMENTO: AnexoTipo;
	export const REGISTRO_COMUNICACAO: AnexoTipo;
	export const REPRESENTANTE: AnexoTipo;
	export const TABELA_PRECO: AnexoTipo;
	export const TABELA_PRECO_ITEM: AnexoTipo;
	export const TAREFA: AnexoTipo;
	export const TEMPLATE_COMUNICACAO: AnexoTipo;
	export const TEMPORARIO: AnexoTipo;
	export const TIPO_MATERIAL: AnexoTipo;
	export const TITULO_VENDA: AnexoTipo;
	export const USUARIO_EMPRESA: AnexoTipo;
}

export type DominioTipo = DominioTipo.static.DominioTipo;
export namespace DominioTipo.static {
	export interface DominioTipo {}

	export const ATENDIMENTO_CLIENTE: DominioTipo;
	export const CREDITO_CLIENTE: DominioTipo;
	export const PENDENCIA_CLIENTE: DominioTipo;
	export const TIPO_CLIENTE: DominioTipo;
}

export type EnderecoTipo = EnderecoTipo.static.EnderecoTipo;
export namespace EnderecoTipo.static {
	export interface EnderecoTipo {}

	export const CLIENTE: EnderecoTipo;
	export const FORNECEDOR: EnderecoTipo;
}

export type EntidadeIntegracao = EntidadeIntegracao.static.EntidadeIntegracao;
export namespace EntidadeIntegracao.static {
	export interface EntidadeIntegracao {}

	export const ACABAMENTO: EntidadeIntegracao;
	export const AGENDAMENTO_APLICACAO: EntidadeIntegracao;
	export const AGRUPADOR_CLIENTE: EntidadeIntegracao;
	export const AJUDA: EntidadeIntegracao;
	export const ANEXO: EntidadeIntegracao;
	export const APLICACAO: EntidadeIntegracao;
	export const ATENDIMENTO_CLIENTE: EntidadeIntegracao;
	export const CAMPANHA: EntidadeIntegracao;
	export const CATEGORIA: EntidadeIntegracao;
	export const CATEGORIA_ESTOQUE_ITEM: EntidadeIntegracao;
	export const CATEGORIA_FILTRO: EntidadeIntegracao;
	export const CATEGORIA_FILTRO_CATEGORIA: EntidadeIntegracao;
	export const CATEGORIA_FILTRO_VALOR: EntidadeIntegracao;
	export const CATEGORIA_HOME_LOJA: EntidadeIntegracao;
	export const CATEGORIA_HOME_LOJA_CATEGORIA: EntidadeIntegracao;
	export const CATEGORIA_HOME_LOJA_ESTOQUE_ITEM: EntidadeIntegracao;
	export const CATEGORIA_PRODUTO: EntidadeIntegracao;
	export const CLASSIFICACAO: EntidadeIntegracao;
	export const CLIENTE: EntidadeIntegracao;
	export const COBRANCA_PEDIDO: EntidadeIntegracao;
	export const COMANDO_INTEGRACAO: EntidadeIntegracao;
	export const COMENTARIO: EntidadeIntegracao;
	export const COMENTARIO_TAREFA: EntidadeIntegracao;
	export const COMUNICACAO: EntidadeIntegracao;
	export const COMUNICACAO_REGISTRO: EntidadeIntegracao;
	export const COMUNICACAO_REGISTRO_THREAD: EntidadeIntegracao;
	export const COMUNICACAO_REGISTRO_THREAD_ENTIDADE: EntidadeIntegracao;
	export const CONDICAO_PAGAMENTO: EntidadeIntegracao;
	export const CONFIGURACAO_APP: EntidadeIntegracao;
	export const CONSIGNACAO: EntidadeIntegracao;
	export const CONSIGNACAO_ITEM: EntidadeIntegracao;
	export const CONSULTA_INTEGRACAO: EntidadeIntegracao;
	export const CONSULTA_INTEGRACAO_USUARIO: EntidadeIntegracao;
	export const CONTADOR_VISUALIZACAO: EntidadeIntegracao;
	export const CONTATO: EntidadeIntegracao;
	export const COR: EntidadeIntegracao;
	export const COTACAO_MOEDA: EntidadeIntegracao;
	export const CREDITO_CLIENTE: EntidadeIntegracao;
	export const CREDITO_CLIENTE_ITEM: EntidadeIntegracao;
	export const CUSTOM_FORM: EntidadeIntegracao;
	export const CUSTOM_FORM_ITEM: EntidadeIntegracao;
	export const DE_PARA: EntidadeIntegracao;
	export const DEPOSITO: EntidadeIntegracao;
	export const DESPESA: EntidadeIntegracao;
	export const DEVICE_USUARIO: EntidadeIntegracao;
	export const DEVOLUCAO: EntidadeIntegracao;
	export const DEVOLUCAO_ITEM: EntidadeIntegracao;
	export const DOMINIO: EntidadeIntegracao;
	export const EMPRESA: EntidadeIntegracao;
	export const ENDERECO: EntidadeIntegracao;
	export const ESPESSURA: EntidadeIntegracao;
	export const ESTOQUE_ITEM: EntidadeIntegracao;
	export const ESTOQUE_ITEM_DADOS_ENTRADA: EntidadeIntegracao;
	export const EVENTO_LOJA: EntidadeIntegracao;
	export const FABRICANTE: EntidadeIntegracao;
	export const FASE_TAREFA: EntidadeIntegracao;
	export const FATURAMENTO: EntidadeIntegracao;
	export const FATURAMENTO_ITEM: EntidadeIntegracao;
	export const FORMA_PAGAMENTO: EntidadeIntegracao;
	export const FORNECEDOR: EntidadeIntegracao;
	export const GRUPO_CLIENTE: EntidadeIntegracao;
	export const GRUPO_CLIENTE_ESTOQUE_ITEM: EntidadeIntegracao;
	export const GRUPO_TAG: EntidadeIntegracao;
	export const GRUPO_USUARIO: EntidadeIntegracao;
	export const GRUPO_USUARIO_USUARIO: EntidadeIntegracao;
	export const GRUPO_USUARIO_USUARIO_NOTIFICACAO: EntidadeIntegracao;
	export const GRUPO_USUARIO_USUARIO_PERMISSAO: EntidadeIntegracao;
	export const HISTORICO_IMPORTACAO_REDE: EntidadeIntegracao;
	export const HISTORICO_NECESSITA_RECALCULO: EntidadeIntegracao;
	export const INSIGHT: EntidadeIntegracao;
	export const INSPECAO: EntidadeIntegracao;
	export const INSPECAO_ITEM: EntidadeIntegracao;
	export const INTEGRADOR: EntidadeIntegracao;
	export const LOCALIZACAO_PATRIMONIO: EntidadeIntegracao;
	export const LOG_GRUPO_USUARIO: EntidadeIntegracao;
	export const MATERIAL: EntidadeIntegracao;
	export const METADADO: EntidadeIntegracao;
	export const MOEDA: EntidadeIntegracao;
	export const MOTIVO_CANCELAMENTO: EntidadeIntegracao;
	export const MOVIMENTACAO_ESTOQUE_ITEM: EntidadeIntegracao;
	export const MOVIMENTACAO_PATRIMONIO: EntidadeIntegracao;
	export const NEGOCIACAO: EntidadeIntegracao;
	export const NEGOCIACAO_ITEM: EntidadeIntegracao;
	export const NOTIFICACAO: EntidadeIntegracao;
	export const OFERTA: EntidadeIntegracao;
	export const OFERTA_CLIENTE: EntidadeIntegracao;
	export const OFERTA_CLIENTE_CONTATO: EntidadeIntegracao;
	export const OFERTA_ITEM: EntidadeIntegracao;
	export const OFERTA_REJEICAO: EntidadeIntegracao;
	export const OPORTUNIDADE: EntidadeIntegracao;
	export const OPORTUNIDADE_PRODUTO: EntidadeIntegracao;
	export const ORDEM_COMPRA: EntidadeIntegracao;
	export const ORDEM_COMPRA_PRODUTO: EntidadeIntegracao;
	export const PAGAMENTO_COBRANCA_PEDIDO: EntidadeIntegracao;
	export const PAIS: EntidadeIntegracao;
	export const PATRIMONIO: EntidadeIntegracao;
	export const PEDIDO: EntidadeIntegracao;
	export const PEDIDO_ITEM: EntidadeIntegracao;
	export const PENDENCIA: EntidadeIntegracao;
	export const PENDENCIA_CLIENTE: EntidadeIntegracao;
	export const PLANEJAMENTO: EntidadeIntegracao;
	export const PLANEJAMENTO_ESTOQUE_ITEM: EntidadeIntegracao;
	export const PLANEJAMENTO_PRODUTO: EntidadeIntegracao;
	export const PORTO: EntidadeIntegracao;
	export const PRODUTO: EntidadeIntegracao;
	export const REGISTRO_COMUNICACAO: EntidadeIntegracao;
	export const REGRA: EntidadeIntegracao;
	export const REGRA_APP: EntidadeIntegracao;
	export const REGRA_ENTIDADE: EntidadeIntegracao;
	export const REGRA_INTEGRACAO: EntidadeIntegracao;
	export const REGRA_USUARIO: EntidadeIntegracao;
	export const RELATORIO: EntidadeIntegracao;
	export const REPRESENTANTE: EntidadeIntegracao;
	export const RESERVA_ITEM: EntidadeIntegracao;
	export const RESERVA_ITEM_HISTORICO: EntidadeIntegracao;
	export const SITUACAO_INTEGRACAO: EntidadeIntegracao;
	export const SOLICITACAO_ARQUIVO_DEVICE: EntidadeIntegracao;
	export const SOLICITACAO_ORCAMENTO_LOJA: EntidadeIntegracao;
	export const SOLICITACAO_ORCAMENTO_LOJA_ITEM: EntidadeIntegracao;
	export const SUGESTAO: EntidadeIntegracao;
	export const TABELA_PRECO: EntidadeIntegracao;
	export const TABELA_PRECO_ITEM: EntidadeIntegracao;
	export const TAG: EntidadeIntegracao;
	export const TAREFA: EntidadeIntegracao;
	export const TEMPLATE_COMUNICACAO: EntidadeIntegracao;
	export const TEMPLATE_COMUNICACAO_SISTEMA: EntidadeIntegracao;
	export const TEMPLATE_CONFIGURACAO_USUARIO: EntidadeIntegracao;
	export const TIPO_APLICACAO: EntidadeIntegracao;
	export const TIPO_CLIENTE: EntidadeIntegracao;
	export const TIPO_CUSTOM_FORM: EntidadeIntegracao;
	export const TIPO_ESTOQUE_ITEM: EntidadeIntegracao;
	export const TIPO_FRETE: EntidadeIntegracao;
	export const TIPO_MATERIAL: EntidadeIntegracao;
	export const TIPO_PATRIMONIO: EntidadeIntegracao;
	export const TIPO_PRODUTO: EntidadeIntegracao;
	export const TIPO_TAREFA: EntidadeIntegracao;
	export const TIPO_VENDA: EntidadeIntegracao;
	export const TITULO_VENDA: EntidadeIntegracao;
	export const USUARIO: EntidadeIntegracao;
	export const USUARIO_EMPRESA: EntidadeIntegracao;
	export const VENDEDOR: EntidadeIntegracao;
}

export type ExibicaoMetadadoSidebar = ExibicaoMetadadoSidebar.static.ExibicaoMetadadoSidebar;
export namespace ExibicaoMetadadoSidebar.static {
	export interface ExibicaoMetadadoSidebar {}

	export const NUNCA: ExibicaoMetadadoSidebar;
	export const PREENCHIDO: ExibicaoMetadadoSidebar;
	export const SEMPRE: ExibicaoMetadadoSidebar;
}

export class GenericModelComparator {
	compare​(o1:GenericModel, o2:GenericModel):Integer
}

export class HistoricoNecessitaRecalculoDTO {
	getEmpresa():Empresa
	getId():String
	getIdEmpresa():String
	getIdEntidade():String
	getTipoNecessitaRecalculo():String
	setEmpresa​(empresa:Empresa):void
	setId​(id:String):void
	setIdEmpresa​(idEmpresa:String):void
	setIdEntidade​(idEntidade:String):void
	setTipoNecessitaRecalculo​(tipoNecessitaRecalculo:String):void
}

export namespace HistoricoNecessitaRecalculoDTO.static {
	export function novo​(idEmpresa:String, motivo:String):HistoricoNecessitaRecalculoDTO
}

export type MetadadoExibicaoEdicao = MetadadoExibicaoEdicao.static.MetadadoExibicaoEdicao;
export namespace MetadadoExibicaoEdicao.static {
	export interface MetadadoExibicaoEdicao {}

	export const EDICAO: MetadadoExibicaoEdicao;
	export const LEITURA: MetadadoExibicaoEdicao;
	export const NAO_EXIBE: MetadadoExibicaoEdicao;
}

export type OrigemRegra = OrigemRegra.static.OrigemRegra;
export namespace OrigemRegra.static {
	export interface OrigemRegra {}

	export const ACABAMENTO_GET_ALL: OrigemRegra;
	export const ACABAMENTO_RECEBER: OrigemRegra;
	export const ANEXO_GET_ALL: OrigemRegra;
	export const ANEXO_GET_BYTES: OrigemRegra;
	export const ATENDIMENTO_CLIENTE_RECEBER: OrigemRegra;
	export const ATENDIMENTO_GET_ALL: OrigemRegra;
	export const CAMPANHA_GET_ALL: OrigemRegra;
	export const CAMPANHA_RECEBER: OrigemRegra;
	export const CATEGORIA_GET_ALL: OrigemRegra;
	export const CATEGORIA_HOME_LOJA_CATEGORIA_GET_ALL: OrigemRegra;
	export const CATEGORIA_HOME_LOJA_CATEGORIA_RECEBER: OrigemRegra;
	export const CATEGORIA_HOME_LOJA_ESTOQUE_ITEM_GET_ALL: OrigemRegra;
	export const CATEGORIA_HOME_LOJA_ESTOQUE_ITEM_RECEBER: OrigemRegra;
	export const CATEGORIA_HOME_LOJA_GET_ALL: OrigemRegra;
	export const CATEGORIA_HOME_LOJA_RECEBER: OrigemRegra;
	export const CATEGORIA_PRODUTO_GET_ALL: OrigemRegra;
	export const CATEGORIA_PRODUTO_RECEBER: OrigemRegra;
	export const CATEGORIA_RECEBER: OrigemRegra;
	export const CLASSIFICACAO_GET_ALL: OrigemRegra;
	export const CLASSIFICACAO_RECEBER: OrigemRegra;
	export const CLIENTE_GET_ALL: OrigemRegra;
	export const CLIENTE_RECEBER: OrigemRegra;
	export const COMENTARIO_GET_ALL: OrigemRegra;
	export const COMENTARIO_RECEBER: OrigemRegra;
	export const CONDICAO_PAGAMENTO_GET_ALL: OrigemRegra;
	export const CONDICAO_PAGAMENTO_RECEBER: OrigemRegra;
	export const CONTATO_GET_ALL: OrigemRegra;
	export const CONTATO_RECEBER: OrigemRegra;
	export const COR_GET_ALL: OrigemRegra;
	export const COR_RECEBER: OrigemRegra;
	export const COTACAO_MOEDA_GET_ALL: OrigemRegra;
	export const COTACAO_MOEDA_RECEBER: OrigemRegra;
	export const CREDITO_CLIENTE_GET_ALL: OrigemRegra;
	export const CREDITO_CLIENTE_RECEBER: OrigemRegra;
	export const CUSTOM_FORM_GET_ALL: OrigemRegra;
	export const CUSTOM_FORM_RECEBER: OrigemRegra;
	export const DEPOSITO_GET_ALL: OrigemRegra;
	export const DEPOSITO_RECEBER: OrigemRegra;
	export const DOMINIO_GET_ALL: OrigemRegra;
	export const DOMINIO_RECEBER: OrigemRegra;
	export const ENDERECO_GET_ALL: OrigemRegra;
	export const ENDERECO_RECEBER: OrigemRegra;
	export const ESPESSURA_GET_ALL: OrigemRegra;
	export const ESPESSURA_RECEBER: OrigemRegra;
	export const ESTOQUE_ITEM_AGRUPADOR_NAO_ENCONTRADO: OrigemRegra;
	export const ESTOQUE_ITEM_GET_BY_CODIGO_INTEGRACAO_TIPO_ESTOQUE_ITEM: OrigemRegra;
	export const ESTOQUE_ITEM_ITEM_NAO_RECEBIDO_DO_CLIENT: OrigemRegra;
	export const ESTOQUE_ITEM_ORIGEM_NAO_ENCONTRADA: OrigemRegra;
	export const ESTOQUE_ITEM_POS_MANTER_EM_ESTOQUE_POR_CAUSA_DE_RESERVA: OrigemRegra;
	export const ESTOQUE_ITEM_RECEBER: OrigemRegra;
	export const FATURAMENTO_GET_ALL: OrigemRegra;
	export const FATURAMENTO_RECEBER: OrigemRegra;
	export const FORMA_PAGAMENTO_GET_ALL: OrigemRegra;
	export const FORMA_PAGAMENTO_RECEBER: OrigemRegra;
	export const FORNECEDOR_GET_ALL: OrigemRegra;
	export const FORNECEDOR_RECEBER: OrigemRegra;
	export const GRUPO_CLIENTE_ESTOQUE_ITEM_GET_ALL: OrigemRegra;
	export const GRUPO_CLIENTE_ESTOQUE_ITEM_RECEBER: OrigemRegra;
	export const GRUPO_CLIENTE_GET_ALL: OrigemRegra;
	export const GRUPO_CLIENTE_RECEBER: OrigemRegra;
	export const INSPECAO_GET_ALL: OrigemRegra;
	export const INSPECAO_RECEBER: OrigemRegra;
	export const MATERIAL_GET_ALL: OrigemRegra;
	export const MATERIAL_RECEBER: OrigemRegra;
	export const METADADO_GET_ALL: OrigemRegra;
	export const METADADO_RECEBER: OrigemRegra;
	export const MOEDA_GET_ALL: OrigemRegra;
	export const MOEDA_RECEBER: OrigemRegra;
	export const NEGOCIACAO_GET_ALL: OrigemRegra;
	export const NEGOCIACAO_RECEBER: OrigemRegra;
	export const OFERTA_CLIENTE_CONTATO_RECEBER: OrigemRegra;
	export const OFERTA_CLIENTE_RECEBER: OrigemRegra;
	export const OFERTA_ITEM_RECEBER: OrigemRegra;
	export const OFERTA_RECEBER: OrigemRegra;
	export const OFERTA_REJEICAO_RECEBER: OrigemRegra;
	export const ORDEM_COMPRA_GET_ALL: OrigemRegra;
	export const ORDEM_COMPRA_RECEBER: OrigemRegra;
	export const PAIS_GET_ALL: OrigemRegra;
	export const PAIS_RECEBER: OrigemRegra;
	export const PEDIDO_GET_ALL: OrigemRegra;
	export const PEDIDO_RECEBER: OrigemRegra;
	export const PENDENCIA_GET_ALL: OrigemRegra;
	export const PENDENCIA_RECEBER: OrigemRegra;
	export const PLANEJAMENTO_RECEBER: OrigemRegra;
	export const PRODUTO_GET_ALL: OrigemRegra;
	export const PRODUTO_RECEBER: OrigemRegra;
	export const REPRESENTANTE_GET_ALL: OrigemRegra;
	export const REPRESENTANTE_RECEBER: OrigemRegra;
	export const RESERVA_ITEM_GET_ALL: OrigemRegra;
	export const RESERVA_ITEM_RECEBER: OrigemRegra;
	export const SUGESTAO_GET_ALL: OrigemRegra;
	export const SUGESTAO_RECEBER: OrigemRegra;
	export const TABELA_PRECO_GET_ALL: OrigemRegra;
	export const TABELA_PRECO_ITEM_GET_ALL: OrigemRegra;
	export const TABELA_PRECO_ITEM_PROCESSAR_NAO_ENCONTRADO: OrigemRegra;
	export const TABELA_PRECO_ITEM_RECEBER: OrigemRegra;
	export const TABELA_PRECO_RECEBER: OrigemRegra;
	export const TAG_GET_ALL: OrigemRegra;
	export const TAREFA_GET_ALL: OrigemRegra;
	export const TAREFA_RECEBER: OrigemRegra;
	export const TIPO_FRETE_GET_ALL: OrigemRegra;
	export const TIPO_FRETE_RECEBER: OrigemRegra;
	export const TIPO_MATERIAL_GET_ALL: OrigemRegra;
	export const TIPO_MATERIAL_RECEBER: OrigemRegra;
	export const TITULO_VENDA_GET_ALL: OrigemRegra;
	export const TITULO_VENDA_PROCESSAR_TITULO_NAO_ENCONTRADO: OrigemRegra;
	export const TITULO_VENDA_RECEBER: OrigemRegra;
}

export type OrigemReservaItem = OrigemReservaItem.static.OrigemReservaItem;
export namespace OrigemReservaItem.static {
	export interface OrigemReservaItem {}

	export const CONFERENCIA: OrigemReservaItem;
	export const LOJA: OrigemReservaItem;
	export const PLANEJAMENTO: OrigemReservaItem;
	export const VENDEDOR: OrigemReservaItem;
}

export interface PathProcessor {
	getExtensoes():String[]
	getPath():String
	processar​(anexoDTO:AnexoDTO):boolean
}

export type SituacaoCampanha = SituacaoCampanha.static.SituacaoCampanha;
export namespace SituacaoCampanha.static {
	export interface SituacaoCampanha {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoCampanha;
	export const ATIVA: SituacaoCampanha;
	export const CANCELADA: SituacaoCampanha;
	export const VENCIDA: SituacaoCampanha;
}

export type SituacaoCancelavel = SituacaoCancelavel.static.SituacaoCancelavel;
export namespace SituacaoCancelavel.static {
	export interface SituacaoCancelavel {}

	export const ATIVO: SituacaoCancelavel;
	export const CANCELADO: SituacaoCancelavel;
}

export type SituacaoCustomForm = SituacaoCustomForm.static.SituacaoCustomForm;
export namespace SituacaoCustomForm.static {
	export interface SituacaoCustomForm {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoCustomForm;
	export const ATIVO: SituacaoCustomForm;
	export const CANCELADO: SituacaoCustomForm;
	export const CONCLUIDO: SituacaoCustomForm;
	export const REJEITADO: SituacaoCustomForm;
}

export type SituacaoFaturamento = SituacaoFaturamento.static.SituacaoFaturamento;
export namespace SituacaoFaturamento.static {
	export interface SituacaoFaturamento {}

	export const ATIVO: SituacaoFaturamento;
	export const CANCELADO: SituacaoFaturamento;
}

export type SituacaoFaturamentoItem = SituacaoFaturamentoItem.static.SituacaoFaturamentoItem;
export namespace SituacaoFaturamentoItem.static {
	export interface SituacaoFaturamentoItem {}

	export const ATIVO: SituacaoFaturamentoItem;
	export const CANCELADO: SituacaoFaturamentoItem;
	export const DEVOLVIDO: SituacaoFaturamentoItem;
}

export type SituacaoInativavel = SituacaoInativavel.static.SituacaoInativavel;
export namespace SituacaoInativavel.static {
	export interface SituacaoInativavel {}

	export const ATIVO: SituacaoInativavel;
	export const INATIVO: SituacaoInativavel;
}

export type SituacaoInspecao = SituacaoInspecao.static.SituacaoInspecao;
export namespace SituacaoInspecao.static {
	export interface SituacaoInspecao {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoInspecao;
	export const ATIVA: SituacaoInspecao;
	export const CANCELADA: SituacaoInspecao;
	export const FECHADA: SituacaoInspecao;
	export const RECEBIDA: SituacaoInspecao;
}

export type SituacaoIntegracao = SituacaoIntegracao.static.SituacaoIntegracao;
export namespace SituacaoIntegracao.static {
	export interface SituacaoIntegracao {}

	export const ERRO: SituacaoIntegracao;
	export const OK: SituacaoIntegracao;
	export const PENDENTE_ENVIO: SituacaoIntegracao;
	export const PENDENTE_ENVIO_MOBGRAN: SituacaoIntegracao;
	export const PENDENTE_RETORNO: SituacaoIntegracao;
}

export type SituacaoNegociacao = SituacaoNegociacao.static.SituacaoNegociacao;
export namespace SituacaoNegociacao.static {
	export interface SituacaoNegociacao {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoNegociacao;
	export const ATIVA: SituacaoNegociacao;
	export const CANCELADA: SituacaoNegociacao;
	export const PEDIDO: SituacaoNegociacao;
	export const VENCIDA: SituacaoNegociacao;
}

export type SituacaoOportunidade = SituacaoOportunidade.static.SituacaoOportunidade;
export namespace SituacaoOportunidade.static {
	export interface SituacaoOportunidade {}

	export const ATIVA: SituacaoOportunidade;
	export const CANCELADA: SituacaoOportunidade;
	export const CONCLUIDA: SituacaoOportunidade;
	export const VENCIDA: SituacaoOportunidade;
}

export type SituacaoOrdemCompra = SituacaoOrdemCompra.static.SituacaoOrdemCompra;
export namespace SituacaoOrdemCompra.static {
	export interface SituacaoOrdemCompra {}

	export const ATIVA: SituacaoOrdemCompra;
	export const CANCELADA: SituacaoOrdemCompra;
	export const FECHADA: SituacaoOrdemCompra;
	export const RECEBIDA: SituacaoOrdemCompra;
}

export type SituacaoPedido = SituacaoPedido.static.SituacaoPedido;
export namespace SituacaoPedido.static {
	export interface SituacaoPedido {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoPedido;
	export const ATIVO: SituacaoPedido;
	export const CANCELADO: SituacaoPedido;
	export const FATURADO_COMPLETO: SituacaoPedido;
	export const FATURADO_INTEGRACAO: SituacaoPedido;
	export const FATURADO_PARCIAL: SituacaoPedido;
	export const FATURADO_SIMPLES: SituacaoPedido;
	export const FECHADO: SituacaoPedido;
	export const VENCIDO: SituacaoPedido;
}

export type SituacaoPendencia = SituacaoPendencia.static.SituacaoPendencia;
export namespace SituacaoPendencia.static {
	export interface SituacaoPendencia {}

	export const APROVADA: SituacaoPendencia;
	export const PENDENTE: SituacaoPendencia;
	export const REJEITADA: SituacaoPendencia;
}

export type SituacaoPlanejamento = SituacaoPlanejamento.static.SituacaoPlanejamento;
export namespace SituacaoPlanejamento.static {
	export interface SituacaoPlanejamento {}

	export const AGUARDANDO_RESOLUCAO_PENDENCIA: SituacaoPlanejamento;
	export const ATIVO: SituacaoPlanejamento;
	export const CANCELADO: SituacaoPlanejamento;
	export const CONCLUIDO: SituacaoPlanejamento;
	export const VENCIDO: SituacaoPlanejamento;
}

export type SituacaoTarefa = SituacaoTarefa.static.SituacaoTarefa;
export namespace SituacaoTarefa.static {
	export interface SituacaoTarefa {}

	export const ATIVA: SituacaoTarefa;
	export const CANCELADA: SituacaoTarefa;
	export const CONCLUIDA: SituacaoTarefa;
}

export type TipoCategoriaHomeLoja = TipoCategoriaHomeLoja.static.TipoCategoriaHomeLoja;
export namespace TipoCategoriaHomeLoja.static {
	export interface TipoCategoriaHomeLoja {}

	export const CATEGORIA: TipoCategoriaHomeLoja;
	export const ESTOQUE_ITEM: TipoCategoriaHomeLoja;
}

export type TipoEstoqueItemExibicaoVisual = TipoEstoqueItemExibicaoVisual.static.TipoEstoqueItemExibicaoVisual;
export namespace TipoEstoqueItemExibicaoVisual.static {
	export interface TipoEstoqueItemExibicaoVisual {}

	export const CATEGORIA: TipoEstoqueItemExibicaoVisual;
	export const MATERIAL: TipoEstoqueItemExibicaoVisual;
}

export type TipoEstoqueItemTipoCalculoQuantidade = TipoEstoqueItemTipoCalculoQuantidade.static.TipoEstoqueItemTipoCalculoQuantidade;
export namespace TipoEstoqueItemTipoCalculoQuantidade.static {
	export interface TipoEstoqueItemTipoCalculoQuantidade {}

	export const METRAGEM: TipoEstoqueItemTipoCalculoQuantidade;
	export const QUANTIDADE: TipoEstoqueItemTipoCalculoQuantidade;
}

export type TipoInspecao = TipoInspecao.static.TipoInspecao;
export namespace TipoInspecao.static {
	export interface TipoInspecao {}

	export const COMPRA: TipoInspecao;
	export const VENDA: TipoInspecao;
}

export type TipoNotificacao = TipoNotificacao.static.TipoNotificacao;
export namespace TipoNotificacao.static {
	export interface TipoNotificacao {}

	export const AMBOS: TipoNotificacao;
	export const EMAIL: TipoNotificacao;
	export const NENHUM: TipoNotificacao;
	export const PUSH: TipoNotificacao;
}

export type TipoPlanejamentoEstoqueItem = TipoPlanejamentoEstoqueItem.static.TipoPlanejamentoEstoqueItem;
export namespace TipoPlanejamentoEstoqueItem.static {
	export interface TipoPlanejamentoEstoqueItem {}

	export const ORIGEM: TipoPlanejamentoEstoqueItem;
}

export type TipoProdutoTipoCalculoValor = TipoProdutoTipoCalculoValor.static.TipoProdutoTipoCalculoValor;
export namespace TipoProdutoTipoCalculoValor.static {
	export interface TipoProdutoTipoCalculoValor {}

	export const METRAGEM_QUANTIDADE_VALOR: TipoProdutoTipoCalculoValor;
	export const METRAGEM_VALOR: TipoProdutoTipoCalculoValor;
	export const QUANTIDADE_VALOR: TipoProdutoTipoCalculoValor;
}

export type TipoProdutoTipoMetragem = TipoProdutoTipoMetragem.static.TipoProdutoTipoMetragem;
export namespace TipoProdutoTipoMetragem.static {
	export interface TipoProdutoTipoMetragem {}

	export const AREA: TipoProdutoTipoMetragem;
	export const DIMENSAO: TipoProdutoTipoMetragem;
	export const NENHUM: TipoProdutoTipoMetragem;
	export const VOLUME: TipoProdutoTipoMetragem;
}

export type TipoTabelaPrecoItem = TipoTabelaPrecoItem.static.TipoTabelaPrecoItem;
export namespace TipoTabelaPrecoItem.static {
	export interface TipoTabelaPrecoItem {}

	export const ESTOQUE_ITEM: TipoTabelaPrecoItem;
	export const PADRAO: TipoTabelaPrecoItem;
	export const PRODUTO: TipoTabelaPrecoItem;
}

}
