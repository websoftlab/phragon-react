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
				<path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
				<path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
				<path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIceCream2Icon.displayName = "TablerIceCream2Icon";
}
