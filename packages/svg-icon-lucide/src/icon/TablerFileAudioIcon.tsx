import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileAudioIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileAudioIcon = React.forwardRef<SVGSVGElement, TablerFileAudioIconProps>(
	function TablerFileAudioIcon(props, ref) {
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
				<path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
				<path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
				<path d="M2 19v-3a6 6 0 0 1 12 0v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileAudioIcon.displayName = "TablerFileAudioIcon";
}
