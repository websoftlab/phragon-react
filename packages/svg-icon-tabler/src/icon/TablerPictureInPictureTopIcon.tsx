import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPictureInPictureTopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPictureInPictureTopIcon = React.forwardRef<SVGSVGElement, TablerPictureInPictureTopIconProps>(
	function TablerPictureInPictureTopIcon(props, ref) {
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
				<path d="M11 5h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-4" />
				<path d="M15 10h5a1 1 0 0 0 1 -1v-3a1 1 0 0 0 -1 -1h-5a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPictureInPictureTopIcon.displayName = "TablerPictureInPictureTopIcon";
}
