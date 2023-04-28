import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAddressBookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAddressBookIcon = React.forwardRef<SVGSVGElement, TablerAddressBookIconProps>(
	function TablerAddressBookIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
				<path d="M10 16h6" />
				<path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M4 8h3" />
				<path d="M4 12h3" />
				<path d="M4 16h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAddressBookIcon.displayName = "TablerAddressBookIcon";
}
