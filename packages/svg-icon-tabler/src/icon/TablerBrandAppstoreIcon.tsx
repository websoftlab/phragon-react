import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAppstoreIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAppstoreIcon = React.forwardRef<SVGSVGElement, TablerBrandAppstoreIconProps>(
	function TablerBrandAppstoreIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
				<path d="M7 14h5m2.9 0h2.1" />
				<path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAppstoreIcon.displayName = "TablerBrandAppstoreIcon";
}
