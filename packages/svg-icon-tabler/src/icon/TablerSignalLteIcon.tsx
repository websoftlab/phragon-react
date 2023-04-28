import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignalLteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignalLteIcon = React.forwardRef<SVGSVGElement, TablerSignalLteIconProps>(
	function TablerSignalLteIcon(props, ref) {
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
				<path d="M21 8h-4v8h4" />
				<path d="M17 12h2.5" />
				<path d="M4 8v8h4" />
				<path d="M10 8h4" />
				<path d="M12 8v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSignalLteIcon.displayName = "TablerSignalLteIcon";
}
