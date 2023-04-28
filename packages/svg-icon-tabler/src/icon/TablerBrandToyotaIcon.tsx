import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandToyotaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandToyotaIcon = React.forwardRef<SVGSVGElement, TablerBrandToyotaIconProps>(
	function TablerBrandToyotaIcon(props, ref) {
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
				<path d="M12 12m-10 0a10 7 0 1 0 20 0a10 7 0 1 0 -20 0" />
				<path d="M9 12c0 3.866 1.343 7 3 7s3 -3.134 3 -7s-1.343 -7 -3 -7s-3 3.134 -3 7z" />
				<path d="M6.415 6.191c-.888 .503 -1.415 1.13 -1.415 1.809c0 1.657 3.134 3 7 3s7 -1.343 7 -3c0 -.678 -.525 -1.304 -1.41 -1.806" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandToyotaIcon.displayName = "TablerBrandToyotaIcon";
}
