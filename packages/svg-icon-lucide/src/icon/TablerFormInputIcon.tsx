import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFormInputIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFormInputIcon = React.forwardRef<SVGSVGElement, TablerFormInputIconProps>(
	function TablerFormInputIcon(props, ref) {
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
				<path d="M4 6 H20 A2 2 0 0 1 22 8 V16 A2 2 0 0 1 20 18 H4 A2 2 0 0 1 2 16 V8 A2 2 0 0 1 4 6 z" />
				<path d="M12 12h.01" />
				<path d="M17 12h.01" />
				<path d="M7 12h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFormInputIcon.displayName = "TablerFormInputIcon";
}
