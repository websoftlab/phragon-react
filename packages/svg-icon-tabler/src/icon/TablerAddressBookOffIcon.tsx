import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAddressBookOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAddressBookOffIcon = React.forwardRef<SVGSVGElement, TablerAddressBookOffIconProps>(
	function TablerAddressBookOffIcon(props, ref) {
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
				<path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" />
				<path d="M10 16h6" />
				<path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
				<path d="M4 8h3" />
				<path d="M4 12h3" />
				<path d="M4 16h3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAddressBookOffIcon.displayName = "TablerAddressBookOffIcon";
}
