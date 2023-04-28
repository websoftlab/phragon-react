import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsJoin2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsJoin2Icon = React.forwardRef<SVGSVGElement, TablerArrowsJoin2IconProps>(
	function TablerArrowsJoin2Icon(props, ref) {
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
				<path d="M3 7h1.948c1.913 0 3.705 .933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5h6.448" />
				<path d="M3 17h1.95a5.854 5.854 0 0 0 4.798 -2.5a5.854 5.854 0 0 1 4.798 -2.5h5.454" />
				<path d="M18 15l3 -3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsJoin2Icon.displayName = "TablerArrowsJoin2Icon";
}
