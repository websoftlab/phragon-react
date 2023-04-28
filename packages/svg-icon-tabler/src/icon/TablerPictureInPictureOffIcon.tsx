import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPictureInPictureOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPictureInPictureOffIcon = React.forwardRef<SVGSVGElement, TablerPictureInPictureOffIconProps>(
	function TablerPictureInPictureOffIcon(props, ref) {
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
				<path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
				<path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" />
				<path d="M7 9l4 4" />
				<path d="M7 12v-3h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPictureInPictureOffIcon.displayName = "TablerPictureInPictureOffIcon";
}
