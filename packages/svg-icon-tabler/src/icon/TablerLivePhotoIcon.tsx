import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLivePhotoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLivePhotoIcon = React.forwardRef<SVGSVGElement, TablerLivePhotoIconProps>(
	function TablerLivePhotoIcon(props, ref) {
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
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M15.9 20.11l0 .01" />
				<path d="M19.04 17.61l0 .01" />
				<path d="M20.77 14l0 .01" />
				<path d="M20.77 10l0 .01" />
				<path d="M19.04 6.39l0 .01" />
				<path d="M15.9 3.89l0 .01" />
				<path d="M12 3l0 .01" />
				<path d="M8.1 3.89l0 .01" />
				<path d="M4.96 6.39l0 .01" />
				<path d="M3.23 10l0 .01" />
				<path d="M3.23 14l0 .01" />
				<path d="M4.96 17.61l0 .01" />
				<path d="M8.1 20.11l0 .01" />
				<path d="M12 21l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLivePhotoIcon.displayName = "TablerLivePhotoIcon";
}
