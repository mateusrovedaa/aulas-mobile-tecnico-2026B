import { ScrollView, View, Text, Button, StyleSheet } from "react-native";

/**
 * Dica importante:
 * - No React Native, o padrão de flexDirection é "column", ao contrário da WEB que é "row".
 * - justifyContent = eixo principal | alignItems = eixo cruzado.
 */
export default function App() {
  return (
    <View style={estilos.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Estilo básico com StyleSheet */}
        <Text style={estilos.titulo}>Estilo básico</Text>
        <View style={estilos.caixa}>
          <Text style={estilos.textoCaixa}>
            Caixa com fundo, padding e borda
          </Text>
        </View>

        {/* Estilo em linha (inline) */}
        <Text style={estilos.titulo}>Estilo em linha</Text>
        <View
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#fca5a5",
            borderRadius: 8,
            justifyContent: "center",
            paddingHorizontal: 12,
            marginBottom: 12,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Barra em inline style
          </Text>
        </View>

        {/* Combinar estilos com array — o último sobrescreve o anterior */}
        <Text style={estilos.titulo}>Combinar estilos ([a, b])</Text>
        <View style={[estilos.caixaPequena, estilos.caixaDestaque]}>
          <Text style={estilos.textoCaixa}>caixaPequena + caixaDestaque</Text>
        </View>

        {/* Flexbox — LINHA (row): eixo principal na horizontal */}
        <Text style={estilos.titulo}>Flex (LINHA - row)</Text>
        <View
          style={[
            estilos.blocoFlex,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          ]}
        >
          <View style={[estilos.quadrado, { backgroundColor: "#a7f3d0" }]} />
          {/* flex: 2 => ocupa o dobro do espaço disponível */}
          <View
            style={[estilos.quadrado, { backgroundColor: "#93c5fd", flex: 2 }]}
          />
          <View style={[estilos.quadrado, { backgroundColor: "#fca5a5" }]} />
        </View>

        {/* Flexbox — COLUNA (column): padrão do RN, eixo principal na vertical */}
        <Text style={estilos.titulo}>Flex (COLUNA - column)</Text>
        <View style={[estilos.blocoFlex, { height: 250 }]}>
          <View style={[estilos.quadrado, { backgroundColor: "#a7f3d0" }]} />
          <View
            style={[estilos.quadrado, { backgroundColor: "#93c5fd", flex: 2 }]}
          />
          <View style={[estilos.quadrado, { backgroundColor: "#fca5a5" }]} />
        </View>

        {/* Centralizar conteúdo com justifyContent + alignItems */}
        <Text style={estilos.titulo}>Centralizado</Text>
        <View style={estilos.centralizado}>
          <Text style={{ marginBottom: 8 }}>Pipoca</Text>
          <Button title="Batata" color="#841584" />
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titulo: {
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 6,
  },
  caixa: {
    width: "100%",
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    marginBottom: 12,
  },
  caixaPequena: {
    width: "100%",
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    padding: 8,
    marginBottom: 12,
  },
  caixaDestaque: {
    borderWidth: 1,
    borderColor: "#60a5fa",
    backgroundColor: "#dbeafe",
  },
  textoCaixa: {
    fontWeight: "600",
  },
  blocoFlex: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    height: 100,
  },
  quadrado: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  centralizado: {
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    justifyContent: "center", // eixo principal (padrão column)
    alignItems: "center", // eixo cruzado (padrão row)
  },
});
