import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDollarSignIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDollarSignIcon = React.forwardRef<SVGSVGElement, TablerDollarSignIconProps>(
	function TablerDollarSignIcon(props, ref) {
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
				<path d="M12 2 L12 22" />
				<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDollarSignIcon.displayName = "TablerDollarSignIcon";
}
