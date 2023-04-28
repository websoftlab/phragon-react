import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldCancelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldCancelIcon = React.forwardRef<SVGSVGElement, TablerWorldCancelIconProps>(
	function TablerWorldCancelIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -8.985 9" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h9.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.991 16.991 0 0 1 2.53 10.275" />
				<path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldCancelIcon.displayName = "TablerWorldCancelIcon";
}
