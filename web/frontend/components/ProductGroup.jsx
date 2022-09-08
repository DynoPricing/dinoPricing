/**
 * Product Group coponent representing a single group,
 * has to get the data about the products and insert to data table,
 * each group can add products
 */

import createApp from "@shopify/app-bridge";
import { Page, Card, DataTable, Button, Badge } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import React, { Component } from "react";
import { useState } from "react";

//data example

class ProductGroup extends React.Component {
	state = { open: false };

	render() {
		// const [rows, setRows] = useState([]);
		// setRows([
		// 	[
		// 		"Emerald Silk Gown",
		// 		<Badge status="success" progress="complete" />,
		// 		124689,
		// 		140,
		// 		"122",
		// 	],
		// 	[
		// 		"Mauve Cashmere Scarf",
		// 		<Badge status="success" progress="complete" />,
		// 		124533,
		// 		83,
		// 		"90",
		// 	],
		// 	[
		// 		"Navy Merino Wool Blazer with khaki chinos and yellow belt",
		// 		<Badge status="success" progress="complete" />,
		// 		124518,
		// 		32,
		// 		"14240",
		// 	],
		// ]);
		return (
			<Page
				title="Product Groups"
				primaryAction={{
					content: "add products",
					onAction: () => {
						this.setState({ open: true });
					},
				}}
			>
				<ResourcePicker
					resourceType="Product"
					open={this.state.open}
					onCancel={() => this.setState({ open: false })}
					onSelection={(productsSelction) => {
						this.handleProducts(productsSelction);
					}}
				/>
				<Card>
					<DataTable
						columnContentTypes={[
							"text",
							"numeric",
							"numeric",
							"numeric",
							"numeric",
						]}
						headings={[
							"Group number 1",
							"Status",
							"Revenue",
							"Days",
							"Impression",
						]}
						rows={[[]]}
						totals={["", "", "", 255, "8300"]}
					/>
				</Card>
			</Page>
		);
	}
	//handle the selected products
	handleProducts = (productsSelction) => {
		this.setState({ open: false });
		console.log(productsSelction);
	};
}

export default ProductGroup;
