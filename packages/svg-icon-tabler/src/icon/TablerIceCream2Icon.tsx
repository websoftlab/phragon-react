import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIceCream2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIceCream2Icon = React.forwardRef<SVGSVGElement, TablerIceCream2IconProps>(
	function TablerIceCream2Icon(props, ref) {
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
				<path d="M17.657 11a6 6 0 1 0 -11.315 0" />
				<path d="M6.342 11l5.658 11l5.657 -11z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIceCream2Icon.displayName = "TablerIceCream2Icon";
}
