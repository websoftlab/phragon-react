import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPictureInPicture2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPictureInPicture2Icon = React.forwardRef<SVGSVGElement, TablerPictureInPicture2IconProps>(
	function TablerPictureInPicture2Icon(props, ref) {
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
				<path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
				<path d="M14 13 H20 A2 2 0 0 1 22 15 V18 A2 2 0 0 1 20 20 H14 A2 2 0 0 1 12 18 V15 A2 2 0 0 1 14 13 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPictureInPicture2Icon.displayName = "TablerPictureInPicture2Icon";
}
