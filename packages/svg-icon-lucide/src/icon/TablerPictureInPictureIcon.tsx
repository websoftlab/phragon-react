import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPictureInPictureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPictureInPictureIcon = React.forwardRef<SVGSVGElement, TablerPictureInPictureIconProps>(
	function TablerPictureInPictureIcon(props, ref) {
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
				<path d="M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3" />
				<path d="M14 13.5 H20 A2 2 0 0 1 22 15.5 V18.5 A2 2 0 0 1 20 20.5 H14 A2 2 0 0 1 12 18.5 V15.5 A2 2 0 0 1 14 13.5 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPictureInPictureIcon.displayName = "TablerPictureInPictureIcon";
}
