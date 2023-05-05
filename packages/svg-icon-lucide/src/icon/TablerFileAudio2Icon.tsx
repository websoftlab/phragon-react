import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileAudio2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileAudio2Icon = React.forwardRef<SVGSVGElement, TablerFileAudio2IconProps>(
	function TablerFileAudio2Icon(props, ref) {
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
				<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M2 17v-3a4 4 0 0 1 8 0v3" />
				<path d="M10 17 A1 1 0 0 1 9 18 A1 1 0 0 1 8 17 A1 1 0 0 1 10 17" />
				<path d="M4 17 A1 1 0 0 1 3 18 A1 1 0 0 1 2 17 A1 1 0 0 1 4 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileAudio2Icon.displayName = "TablerFileAudio2Icon";
}
