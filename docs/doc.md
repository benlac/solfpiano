Nombre de position possible:

- Sous la ligne
- Sur la ligne
- Au dessus de la ligne

Clé de SOL:

15 positions possibles

Do | Re | Mi | FA

Sol | La | Si | Do

Re | Mi | Fa | Sol

La | Si | Do

Do: 3
Re: 2
Mi: 2
Fa: 2
Sol: 2
La: 2
Si: 2

Nombre de note par exercice: 20

exemple d'un exercice:

// 2 notes : 'DO' position 1 et 'SOL' position 5
const level1Exercice1 = [
{
id: 1,
position: 1,
note: "do"
},
{
id: 2,
position: 5,
note: "sol"
}
]

// Ligne 1
// Position 1, 2, 3, 4 (do, ré, mi)
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
</View>

// Ligne 2
// Position 5, 6
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<View
style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
            marginTop: 20,
          }}
/>
</View>

// Ligne 3
// Position 7, 8
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<View
style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
            marginTop: 20,
          }}
/>
</View>

// Ligne 4
// position 9, 10
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<View
style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
            marginTop: 20,
          }}
/>
</View>

// Position 11 (ligne), 12(dessus), 13(+1), 14(+2), 15(+3)
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<View
style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
            marginTop: 20,
          }}
/>
</View>
