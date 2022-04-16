import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { AccountSettingsLayout } from "../../../components/common";
import {
	AddressBook,
	ChangePassword,
	MyWishlist,
	MyOrders,
	PaymentMethods,
	OrderDetails,
} from "../../../components/accountSettings";

const AddressBookView: NextPage = () => {
	const router = useRouter();
	const query = router.query.route;

	return (
		<div>
			<Head>
				<title>account-setting / address-book</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AccountSettingsLayout>
				{query === "change-password" ? (
					<ChangePassword />
				) : query === "address-book" ? (
					<AddressBook />
				) : query === "my-orders" ? (
					<MyOrders />
				) : query === "order-details" ? (
					<OrderDetails />
				) : query === "my-wishlist" ? (
					<MyWishlist />
				) : query === "payment-methods" ? (
					<PaymentMethods />
				) : null}
			</AccountSettingsLayout>
		</div>
	);
};

export default AddressBookView;
