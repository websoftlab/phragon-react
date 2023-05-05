import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrainCircuitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrainCircuitIcon = React.forwardRef<SVGSVGElement, TablerBrainCircuitIconProps>(
	function TablerBrainCircuitIcon(props, ref) {
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
				<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
				<path d="M16 8V5c0-1.1.9-2 2-2" />
				<path d="M12 13h4" />
				<path d="M12 18h6a2 2 0 0 1 2 2v1" />
				<path d="M12 8h8" />
				<path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
				<path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
				<path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
				<path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrainCircuitIcon.displayName = "TablerBrainCircuitIcon";
}
