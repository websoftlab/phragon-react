import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessage2ShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessage2ShareIcon = React.forwardRef<SVGSVGElement, TablerMessage2ShareIconProps>(
	function TablerMessage2ShareIcon(props, ref) {
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
				<path d="M8 9h8" />
				<path d="M8 13h6" />
				<path d="M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessage2ShareIcon.displayName = "TablerMessage2ShareIcon";
}
