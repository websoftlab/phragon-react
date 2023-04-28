import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileSettingsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileSettingsIcon = React.forwardRef<SVGSVGElement, TablerFileSettingsIconProps>(
	function TablerFileSettingsIcon(props, ref) {
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
				<path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 10.5v1.5" />
				<path d="M12 16v1.5" />
				<path d="M15.031 12.25l-1.299 .75" />
				<path d="M10.268 15l-1.3 .75" />
				<path d="M15 15.803l-1.285 -.773" />
				<path d="M10.285 12.97l-1.285 -.773" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileSettingsIcon.displayName = "TablerFileSettingsIcon";
}
