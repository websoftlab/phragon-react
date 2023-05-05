import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListMusicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListMusicIcon = React.forwardRef<SVGSVGElement, TablerListMusicIconProps>(
	function TablerListMusicIcon(props, ref) {
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
				<path d="M21 15V6" />
				<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
				<path d="M12 12H3" />
				<path d="M16 6H3" />
				<path d="M12 18H3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListMusicIcon.displayName = "TablerListMusicIcon";
}
