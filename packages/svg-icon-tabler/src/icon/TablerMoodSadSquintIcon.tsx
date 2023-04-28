import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSadSquintIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSadSquintIcon = React.forwardRef<SVGSVGElement, TablerMoodSadSquintIconProps>(
	function TablerMoodSadSquintIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
				<path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
				<path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodSadSquintIcon.displayName = "TablerMoodSadSquintIcon";
}
