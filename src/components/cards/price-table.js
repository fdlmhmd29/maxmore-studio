/** @jsx jsx */
import { jsx, Box, Button, Heading, Text } from "theme-ui";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { rgba } from "polished";

const PriceTable = ({ price, isAnnual }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`priceCard ${price.isRecommended ? "recommended" : ""}`}
    >
      <Box sx={styles.header} className="priceHeader">
        <Heading as="h3" sx={styles.title}>
          {price.title}
        </Heading>
        <Text as="p" sx={styles.priceAmount}>
          {isAnnual
            ? price?.amount?.annual.toLocaleString(["ban", "id"])
            : price?.amount?.monthly.toLocaleString(["ban", "id"])}
          /minggu
        </Text>
        <Text as="p" sx={styles.subtitle}>
          {price.subtitle}
        </Text>
      </Box>
      <Box as="ul" sx={styles.list}>
        {price?.features?.map((feat) => (
          <li key={feat.id} className={!feat.isAvailable ? "unavailable" : ""}>
            {feat.isAvailable ? (
              <span>
                <IoMdCheckmarkCircle sx={{ color: "primary" }} size="23px" />
              </span>
            ) : (
              <span>
                <IoIosCloseCircle color="#CED7E1" size="23px" />
              </span>
            )}
            <span>{feat.title}</span>
          </li>
        ))}
      </Box>
      <Box className="priceButton">
        <a
          sx={{ textDecoration: "none" }}
          target="_blank"
          href="https://forms.gle/KxPpnjPtr3yrPSt46"
        >
          <Button sx={styles.button} variant="primaryMd">
            {price.buttonText}
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default PriceTable;

const styles = {
  priceTable: {
    background: "white",
    borderRadius: 12,
    position: "relative",
    padding: ["40px 20px", null, null, null, "45px 50px 70px"],
    m: [2, null, null, 2],
    boxShadow: "0px 10px 60px rgba(62, 95, 119, 0.08)",
    "&.recommended": {
      boxShadow: "0px 10px 60px rgba(62, 95, 119, 0.08)",
      padding: ["55px 20px", null, null, null, "65px 60px 90px"],
      mt: [6, null, null, 0],
      button: {
        backgroundColor: "primary",
        color: "white",
        ":hover": {
          backgroundColor: "secondary",
          cursor: "pointer",
        },
      },
    },
  },
  header: {
    borderBottom: `1px solid #E0E2E4`,
    pb: [6],
  },
  title: {
    fontWeight: 700,
    fontSize: 5,
    lineHeight: 1.31,
    letterSpacing: "-0.55px",
  },
  priceAmount: {
    color: "primary",
    fontWeight: 700,
    fontSize: "26px",
    lineHeight: 1.39,
    letterSpacing: "heading",
    mt: [2],
  },
  subtitle: {
    color: rgba("#343D48", 0.65),
    lineHeight: 1.62,
    maxWidth: 290,
    mt: [4],
  },
  list: {
    borderBottom: `1px solid #E0E2E4`,
    listStyle: "none",
    padding: 0,
    mt: [7],
    pb: [7],
    maxWidth: 340,
    li: {
      display: "flex",
      alignItems: "flex-start",
      fontSize: 16,
      lineHeight: 1.62,
      "+ li ": {
        mt: 30,
      },
      "span:first-of-type": {
        mr: "13px",
        mt: "5px",
      },
    },
    ".unavailable": {
      opacity: 0.5,
    },
  },
  button: {
    backgroundColor: rgba("#FFC059", 0.1),
    color: "primary",
    minHeight: [50, null, null, null, 50],
    px: 25,
    mt: [7],
    fontWeight: "bold",
    borderRadius: 12,
    ":hover": {
      backgroundColor: "secondary",
      color: "white",
      cursor: "pointer",
    },
  },
};
