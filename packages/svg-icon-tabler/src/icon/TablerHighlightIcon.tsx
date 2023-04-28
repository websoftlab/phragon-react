import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHighlightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHighlightIcon = React.forwardRef<SVGSVGElement, TablerHighlightIconProps>(
	function TablerHighlightIcon(props, ref) {
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
				<path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
				<path d="M12.5 5.5l4 4" />
				<path d="M4.5 13.5l4 4" />
				<path d="M21 15v4h-8l4 -4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHighlightIcon.displayName = "TablerHighlightIcon";
}
