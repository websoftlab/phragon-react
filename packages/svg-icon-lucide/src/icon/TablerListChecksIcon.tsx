import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListChecksIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListChecksIcon = React.forwardRef<SVGSVGElement, TablerListChecksIconProps>(
	function TablerListChecksIcon(props, ref) {
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
				<path d="M10 6 L21 6" />
				<path d="M10 12 L21 12" />
				<path d="M10 18 L21 18" />
				<path d="M3 6 L4 7 L6 5" />
				<path d="M3 12 L4 13 L6 11" />
				<path d="M3 18 L4 19 L6 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListChecksIcon.displayName = "TablerListChecksIcon";
}
