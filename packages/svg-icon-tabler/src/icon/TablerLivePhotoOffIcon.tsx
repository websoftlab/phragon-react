import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLivePhotoOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLivePhotoOffIcon = React.forwardRef<SVGSVGElement, TablerLivePhotoOffIconProps>(
	function TablerLivePhotoOffIcon(props, ref) {
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
				<path d="M11.296 11.29a1 1 0 1 0 1.414 1.415" />
				<path d="M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851" />
				<path d="M15.9 20.11v.01" />
				<path d="M19.04 17.61v.01" />
				<path d="M20.77 14v.01" />
				<path d="M20.77 10v.01" />
				<path d="M19.04 6.39v.01" />
				<path d="M15.9 3.89v.01" />
				<path d="M12 3v.01" />
				<path d="M8.1 3.89v.01" />
				<path d="M4.96 6.39v.01" />
				<path d="M3.23 10v.01" />
				<path d="M3.23 14v.01" />
				<path d="M4.96 17.61v.01" />
				<path d="M8.1 20.11v.01" />
				<path d="M12 21v.01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLivePhotoOffIcon.displayName = "TablerLivePhotoOffIcon";
}
